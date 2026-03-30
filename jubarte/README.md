# Flat Jubarte — Guest Guide

A progressive web app (PWA) guest guide for **Flat Jubarte**, a vacation rental in Itacaré, Bahia, Brazil. Guests scan a QR code on arrival and get instant access to house rules, Wi-Fi credentials, local beach & restaurant recommendations, and direct host contact — in their preferred language.

> Sister project of [Flat Maritaca](../maritaca/README.md), sharing the same architecture and Itacaré recommendations.

---

## Features

- **Multi-language** — Portuguese, English, and Hebrew (with full RTL support for HE)
- **Dark mode** — respects `prefers-color-scheme`; toggle persisted in `localStorage`
- **Live weather widget** — current conditions + 7-day forecast via [Open-Meteo](https://open-meteo.com/), with automatic retry on failure
- **Photo gallery** — grid layout with full-screen modal viewer and keyboard/focus trap
- **Image carousels** — swipeable multi-photo cards for restaurants
- **PWA** — installable via `manifest.json`, works offline after first load
- **Accessible** — skip link, `aria-label` on all interactive elements, focus management in modal, keyboard navigation throughout

---

## Design Theme

Jubarte uses a **deep ocean blue** palette inspired by the humpback whale (*baleia-jubarte*) — distinct from the tropical bird greens of Flat Maritaca.

| Token | Light | Dark |
|---|---|---|
| Primary | `#0077B6` | `#48CAE4` |
| Accent | `#0096C7` | `#52B6D4` |
| Background | `#F0F8FF` | `#071B2E` |
| Card | `#FFFFFF` | `#163A5F` |

---

## Project Structure

```
jubarte/
├── index.html          # Single-page app shell
├── manifest.json       # PWA manifest
├── css/
│   └── styles.css      # Ocean-blue design system + all component styles
├── js/
│   ├── i18n.js         # Translations (PT / EN / HE) + language helpers
│   ├── app.js          # Main app: renders content, modal, dark mode, TOC
│   ├── weather.js      # Weather widget (Open-Meteo API)
│   └── carousel.js     # Image carousel for restaurant cards
└── images/
    ├── jubarte.png              # Logo / favicon
    ├── JubarteGuest-qrcode.png  # Wi-Fi QR code
    ├── apartment/               # Gallery photos (img1–7)
    └── must-see/                # Beach & waterfall photos
```

> **Restaurant and sports images** are loaded from `../maritaca/images/` since both flats share the same Itacaré recommendations. Copy them locally if deploying Jubarte independently.

---

## Getting Started

No build step required. Open `index.html` directly in a browser or serve with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

---

## Content Sections

| Section | Description |
|---|---|
| About | Flat overview, amenities list, humpback whale fun-fact notice |
| Gallery | 6-photo apartment gallery with modal viewer |
| House Rules | Check-in/out times, noise policy, waste sorting |
| Beaches | 7 spots near Itacaré — includes São José beach (exclusive to Jubarte) |
| Chef's Picks | Recommended restaurants with carousels, maps, and Instagram links |
| Sports | Surf schools, Jiu-Jitsu, CrossFit, and outrigger canoe with maps |
| Wi-Fi | Network `JubarteGuest`, reveal-on-tap password, and QR code |
| Help | Direct WhatsApp link to the host |

---

## Adding / Editing Content

All user-facing text lives in **`js/i18n.js`**. Each top-level key mirrors a section and has three language variants (`pt`, `en`, `he`).

To update the Wi-Fi password, change `wifi.password` in all three language objects:

```js
wifi: {
  network: "JubarteGuest",
  password: "your-new-password",   // ← change here in pt, en, and he
  ...
}
```

---

## Tech Stack

| Concern | Solution |
|---|---|
| Styling | Vanilla CSS with custom properties (no framework) |
| Icons | Font Awesome 6.5.1 |
| Typography | Google Fonts — Quicksand |
| Weather | Open-Meteo (free, no API key) |
| Translations | Inline JS object (`i18n.js`) |
| PWA | `manifest.json` |

---

## Browser Support

Targets modern mobile browsers (Chrome/Safari on iOS and Android). The primary use case is a guest opening a QR code link on their phone at check-in.
