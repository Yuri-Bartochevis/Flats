# Flat Maritaca — Guest Guide

A progressive web app (PWA) guest guide for **Flat Maritaca**, a vacation rental in Itacaré, Bahia, Brazil. Guests scan a QR code on arrival and get instant access to house rules, Wi-Fi credentials, local beach & restaurant recommendations, and direct host contact — in their preferred language.

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

## Project Structure

```
maritaca/
├── index.html          # Single-page app shell
├── manifest.json       # PWA manifest
├── css/
│   └── styles.css      # Design system + all component styles
├── js/
│   ├── i18n.js         # Translations (PT / EN / HE) + language helpers
│   ├── app.js          # Main app: renders content, modal, dark mode, TOC
│   ├── weather.js      # Weather widget (Open-Meteo API)
│   └── carousel.js     # Image carousel for restaurant cards
└── images/
    ├── maritaca.png           # Logo / favicon
    ├── MaritacaGuest-qrcode.png  # Wi-Fi QR code
    ├── apartment/             # Gallery photos
    ├── must-see/              # Beach photos
    ├── restaurants/           # Restaurant photos
    └── sports/                # Sports activity photos
```

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
| About | Flat overview, amenities list, welcome notice |
| Gallery | 6-photo apartment gallery with modal viewer |
| House Rules | Check-in/out times, noise policy, waste sorting |
| Beaches | Top beaches near Itacaré with photos and descriptions |
| Chef's Picks | Recommended restaurants with carousels, maps, and Instagram links |
| Sports | Surf schools, yoga, and outdoor activities with maps |
| Wi-Fi | Network name, reveal-on-tap password, and QR code |
| Help | Direct WhatsApp link to the host |

---

## Adding / Editing Content

All user-facing text lives in **`js/i18n.js`**. Each top-level key mirrors a section (`about`, `beaches`, `chefs`, etc.) and has three language variants (`pt`, `en`, `he`).

To add a new beach, for example, append an entry to `beaches.items` in all three language objects:

```js
{
  name: "Praia de Itacarezinho",
  desc: "Quiet beach with natural pools.",
  image: "images/must-see/itacarezinho.jpg"
}
```

Images go in the corresponding subfolder under `images/`.

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
