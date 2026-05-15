// Vercel serverless function: POST/GET /api/unlock?code=XXX
//
// Validates the stay code against the STAY_CODES env var (comma-separated)
// and returns the Wi-Fi password from WIFI_PASSWORD. Both env vars are set
// in the Vercel project dashboard, never committed.
//
// Returns 401 for invalid/missing codes. No detail leaked.

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 12;
const buckets = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const bucket = buckets.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + RATE_LIMIT_WINDOW_MS;
  }
  bucket.count += 1;
  buckets.set(ip, bucket);
  return bucket.count <= RATE_LIMIT_MAX;
}

function constantTimeEq(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export default function handler(req, res) {
  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  if (!rateLimit(ip)) {
    res.setHeader('Retry-After', '60');
    return res.status(429).json({ error: 'too_many_requests' });
  }

  const codeRaw =
    (req.query && req.query.code) ||
    (req.body && req.body.code) ||
    '';
  const code = String(codeRaw).trim();

  const validCodes = (process.env.STAY_CODES || '')
    .split(',')
    .map(c => c.trim())
    .filter(Boolean);
  const wifiPassword = process.env.WIFI_PASSWORD || '';

  if (!code || !wifiPassword || validCodes.length === 0) {
    return res.status(401).json({ error: 'invalid_code' });
  }

  const ok = validCodes.some(valid => constantTimeEq(code, valid));
  if (!ok) {
    return res.status(401).json({ error: 'invalid_code' });
  }

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    network: 'MaritacaGuest',
    password: wifiPassword
  });
}
