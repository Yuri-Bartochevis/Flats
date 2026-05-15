# Flat Maritaca

Static site for **Flat Maritaca**, a vacation rental in Itacaré, Bahia. Two surfaces:

- **`/`** — public marketing landing (PT/EN/HE), JSON-LD `LodgingBusiness`, WhatsApp CTAs.
- **`/guide`** — private guest guide. The Wi-Fi password is gated behind a stay code that is validated by `/api/unlock` against an env var on Vercel; it never ships in the JS bundle.

## Project layout

```
maritaca/
├── index.html          # Public marketing landing
├── guide.html          # Guest-only guide (noindex)
├── privacy.html        # LGPD privacy notice
├── 404.html            # Branded not-found page
├── manifest.json       # PWA manifest
├── robots.txt
├── sitemap.xml
├── vercel.json         # Headers, redirects, clean URLs
├── api/
│   └── unlock.js       # Serverless fn: validates stay code, returns Wi-Fi password
├── css/styles.css      # Design system + landing additions
├── js/
│   ├── i18n.js         # PT / EN / HE translations
│   ├── landing.js      # Public landing logic (slim)
│   ├── app.js          # Guest guide logic
│   ├── weather.js      # Open-Meteo widget (guide only)
│   └── carousel.js     # Restaurant card carousels
└── images/
    ├── apartment/      # Gallery (640 / 1280 / 1920 widths)
    ├── must-see/       # Beach photos
    ├── restaurants/    # Restaurant photos
    ├── sports/         # Sports photos
    ├── favicons/       # 32 / 180 / 192 / 512
    ├── og-image.jpg    # 1200x630 social preview
    └── maritaca.png    # Logo
```

## Local dev

```bash
python3 -m http.server 8080
# or
npx serve .
```

For the `/api/unlock` route, run with the Vercel CLI:

```bash
npm i -g vercel
vercel dev
# set local env vars in .env (gitignored): STAY_CODES, WIFI_PASSWORD
```

## Deploy to Vercel

### 1. Create the Vercel project

```bash
vercel link        # connects this folder to a new/existing project
```

### 2. Set environment variables

In the Vercel dashboard → **Settings → Environment Variables**, add:

| Name           | Value                              | Notes                                        |
|----------------|------------------------------------|----------------------------------------------|
| `STAY_CODES`   | e.g. `MAR2026,VIP-ABCDE`           | Comma-separated. Issue a unique one per booking. |
| `WIFI_PASSWORD`| `wifiandwaves`                     | Current Wi-Fi password.                      |

Apply to **Production** and **Preview** environments.

### 3. Custom domain

1. Vercel dashboard → **Domains** → add `flatmaritaca.com.br` and `www.flatmaritaca.com.br`.
2. Vercel will show DNS records. Two options on Registro.br:
   - **Easiest:** point Registro.br nameservers to Vercel-suggested NS (look up Vercel's nameserver instructions when adding the domain — they appear inline).
   - **Or via DNS records on Registro.br:**
     - `A` record `@` → `76.76.21.21`
     - `CNAME` `www` → `cname.vercel-dns.com`
3. The `vercel.json` already redirects `www` → apex (HTTP 308).

### 4. After deploy

- Submit `https://flatmaritaca.com.br/sitemap.xml` to Google Search Console.
- (Optional) Enable Vercel Web Analytics in the project dashboard — cookieless, LGPD-friendly.
- Test the stay-code unlock with a code from `STAY_CODES`.

## Adding/editing content

All copy lives in `js/i18n.js`, organised by language (`pt`, `en`, `he`). Each top-level key (`landing`, `about`, `beaches`, `chefs`, `sports`, `rules`, `wifi`, `help`, `footer`) has the same shape across languages.

Images for new beaches/restaurants/sports go in the matching `images/` subfolder.

## Security

- Wi-Fi credentials never leave the server unless a valid stay code is supplied.
- `/api/unlock` rate-limits per IP and uses constant-time string comparison.
- HSTS preload, strict CSP, `X-Frame-Options: DENY`, minimal Permissions-Policy — see `vercel.json`.
- `/guide` is `noindex,nofollow` (also enforced via response header).

## What's intentionally missing

- **Email forwarding** — contact is WhatsApp only by design.
- **Booking platform integrations** (Airbnb/Booking widgets) — the WhatsApp CTA is the booking funnel today; add later if desired.
- **Map embed** — `/` uses a static location card with an "Open in Google Maps" button to keep CSP tight and avoid third-party iframes.

## Browser support

Modern Chrome/Safari/Firefox on mobile and desktop. The PWA install path works on iOS Safari and Chrome Android.
