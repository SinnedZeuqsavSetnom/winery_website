# The Chthonic Winery

Source for [thechthonicwinery.com](https://thechthonicwinery.com), hosted on GitHub Pages.

© 2026 The Chthonic Winery. All rights reserved. Not open source.

## Images

`images/` holds the full-resolution originals — drop new photos into the matching subfolder there:

- `images/current-release/PB25/` — Persephone's Boon (2025 Seyval Blanc)
- `images/upcoming-release/AB25/` — non-commercial test release ("Even Devils Fear What They Cannot Understand")
- `images/upcoming-release/` — other next releases, not yet public
- `images/method/` — general harvest/production shots
- `images/brand/` — label art, logo, reusable brand assets
- `images/site/` — generic, non-release/non-method imagery: about page, landing page, footer, banners, and anywhere else site-wide
- `images/people/` — photos of people (and pets) associated with the winery
- `images/fairs/` — festival/market appearance photos
- `images/previous-release/` — archive of past releases, one subfolder per release

**`images resized/` mirrors that same structure** with web-optimized copies (resized to a 1920px max edge, compressed JPEGs) — this is what the site's HTML actually links to, so the full-resolution originals in `images/` stay untouched for future use. Whenever new photos are added to `images/`, a matching resized copy needs to be generated into `images resized/` and the HTML updated to point at it.
