# Fakhri Yarn

Website for **Fakhri Yarn** — a family-run rope, niwar (webbing tape) and twine
business in Dahod, Gujarat, making and supplying since 2004. Retail counter and
factory-direct wholesale.

🔗 Live site: _add your Vercel URL here after deploying_

## About the site

A hand-coded static website — no framework, no build step. Just open
`index.html` and it runs.

- **Three languages** with an in-page switcher — English, हिंदी, ગુજરાતી
- **Product catalogue** — featured carousel + a full-screen catalogue modal
- **Enquiry flow** over WhatsApp or email (no backend)
- **Responsive** — layouts designed separately for phone, tablet and desktop
- **Accessible** — keyboard navigation, semantic HTML, WCAG AA contrast,
  reduced-motion support

## Structure

| File | What it holds |
|------|---------------|
| `index.html` | Page markup |
| `styles.css` | All styling and animation |
| `app.js` | Product data, carousel, modals, language switching, enquiry form |
| `i18n.js` | Every piece of copy, in all three languages |
| `assets/` | Images (WebP), the factory video, and the logo |

## Run it locally

Any static server works. For example:

```bash
python -m http.server 8137
```

Then open <http://localhost:8137>.

## Deploy

Drag the project folder onto [vercel.com](https://vercel.com) (**Add New →
Project**), or connect this repository for automatic deploys on every push.
Hosting and HTTPS are free.

## Tech

Vanilla HTML, CSS and JavaScript. Fonts: Cormorant Garamond + Source Sans 3,
with Noto Serif Devanagari / Gujarati for the Indic scripts.
