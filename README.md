# Nihal & Fathimathul Shadha — Wedding Invitation Website

A premium, luxury Muslim wedding invitation website built with pure HTML5, CSS3, and Vanilla JavaScript.

## Structure

```
nihal-fathimathulshadha-invitation/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Main styles, variables, sections
│   ├── responsive.css      # Media queries (320px → 1440px+)
│   └── animations.css      # AOS-like scroll animations, keyframes
├── js/
│   ├── config.js           # Central wedding-details configuration
│   ├── main.js             # Gate/loading screen, nav, music player
│   ├── countdown.js        # Live countdown to the Nikah / Reception
│   └── animations.js       # Scroll reveal, parallax, gallery lightbox
├── assets/
│   ├── images/
│   │   ├── couple.jpg      # Couple portrait (gate + opening section)
│   │   ├── hero-bg.jpg     # Background photo (hero/countdown/events)
│   │   └── gallery-1..5.jpg # Gallery photos (unused, spare)
│   └── music.mp3
└── README.md
```

## Couple Details

- **Groom:** Nihal Kandakal, S/o (Late) Muhammad Ali V & Nabeesu Kandakal — Thoufeeq Manzil, Thazhevayal, Punnol (PO), Thalassery
- **Bride:** Fathimathul Shadha C H, D/o Saleem M T & Shameema C H — Sulaikha's, Thazhevayal, Punnol (PO), Thalassery

## Events

| Event      | Date                          | Time                | Venue                                    |
|------------|--------------------------------|----------------------|-------------------------------------------|
| Nikah      | 11 September 2026 (Friday)     | After Asar Namaz     | Meethal Juma Masjid, Punnol               |
| Reception  | 12 September 2026 (Saturday)   | 1:00 PM – 3:00 PM    | At Groom's Residence, Thoufeeq Manzil     |

## Colors (unchanged from source template)

| Token    | Value     |
|----------|-----------|
| Cream    | `#F8F4ED` |
| Green    | `#2E5D50` |
| Gold     | `#C8A96A` |

## Fonts

- **Script (names):** Great Vibes
- **Serif (headings):** Playfair Display
- **Content (body):** Cormorant Garamond / Lato
- **Arabic:** Amiri

## Features

- ✅ Luxury tap-to-open gate with Bismillah + English translation
- ✅ Hero with parallax & entrance animations
- ✅ Live countdown to the wedding day
- ✅ Bride & Groom / Family section
- ✅ Events cards with Google Maps directions for both Nikah and Reception
- ✅ Wedding programme timeline
- ✅ Quote section (Quran verse)
- ✅ Background music player with mute toggle
- ✅ Scroll-reveal animations
- ✅ Fully responsive (320px → 1440px+)
- ✅ SEO meta tags & Open Graph

## Notes

- All wedding details (names, dates, venues, Google Maps links) are centralized
  in `js/config.js` for easy future edits, and mirrored directly in `index.html`.
- `og:url` / `canonical` use a placeholder domain — update once the site is
  deployed to its real address.
- The Gallery and RSVP sections from the original template remain disabled
  (commented out in `index.html`) as they were in the reference site.
