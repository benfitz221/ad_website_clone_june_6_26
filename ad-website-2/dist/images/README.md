# Image Placeholders — Agent Done Website

Drop your images into the folders below. The site references each file by exact name.
If a file is missing, the component falls back to a default Unsplash URL.

---

## Folder Map

```
public/images/
├── hero/
│   └── hero-bg.jpg          ← Hero section full-viewport background
├── philosophy/
│   └── philosophy-bg.jpg    ← Philosophy section parallax background
└── communities/
    ├── community-01.jpg     ← Community card 1
    ├── community-02.jpg     ← Community card 2
    └── community-03.jpg     ← Community card 3
```

---

## Specs Per Slot

### hero/hero-bg.jpg
- **Used in:** `Hero.jsx` — full-viewport background, 15% opacity overlay
- **Dimensions:** 2000 × 1200 px minimum (16:9 or wider)
- **Subject:** Aerial or street-level view of a B/C class apartment community — garden-style units, surface parking, residential neighborhood feel. Avoid glass towers or luxury high-rises.
- **Format:** JPG, <500 KB recommended

### philosophy/philosophy-bg.jpg
- **Used in:** `Philosophy.jsx` — parallax background, 10% opacity overlay
- **Dimensions:** 2000 × 1200 px minimum
- **Subject:** Property management context — a site office desk, maintenance staff walking a property, or a community walkway. Should suggest operational work, not marketing imagery.
- **Format:** JPG, <500 KB recommended

### communities/community-01.jpg
### communities/community-02.jpg
### communities/community-03.jpg
- **Used in:** `CommunityGallery.jsx` — card backgrounds, 40% opacity overlay with text on top
- **Dimensions:** 800 × 600 px minimum (4:3 or 16:9)
- **Subject:** Exterior shots of B/C class apartment communities — 100–500 unit garden-style complexes, mid-rise buildings in suburban neighborhoods, townhome communities. Show the scale and residential character.
- **Format:** JPG, <300 KB each recommended

---

## How to Replace Images

1. Export your photo to the correct dimensions
2. Name it exactly as shown above (lowercase, no spaces)
3. Drop it in the correct subfolder
4. Run `npm run build` — the site will use your image automatically

The components use paths like `/images/hero/hero-bg.jpg`.
Vite serves everything in `public/` at the root, so no import needed.
