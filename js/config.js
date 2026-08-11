/**
 * ============================================================
 *  WEDDING CONFIGURATION — NIHAL & FATHIMATHUL SHADHA
 *  Edit this file to update all wedding details across the site
 * ============================================================
 */
window.WEDDING_CONFIG = {

  /* ── SEO & METADATA ─────────────────────────────────────── */
  seo: {
    title:             'Nihal & Fathimathul Shadha — Wedding Invitation',
    description:       'Mrs. Nabeesu Kandakal and Mr. Mushafa Pilakeel cordially invite you to the wedding of Nihal Kandakal with Fathimathul Shadha C H on 11–12 September 2026 at Meethal Juma Masjid, Punnol, Thalassery.',
    ogTitle:           'Nihal & Fathimathul Shadha — Wedding Invitation',
    ogDescription:     'You are warmly invited to the wedding of Nihal Kandakal & Fathimathul Shadha C H — 11–12 September 2026.',
    ogImage:           'og-image.jpg',
    canonicalUrl:      'https://nihal-shadha-wedding.example.com/',
    themeColor:        '#C8A96A',
  },

  /* ── COUPLE ─────────────────────────────────────────────── */
  groom: {
    firstName:         'Nihal',
    fullName:          'Nihal Kandakal',
    role:              'The Groom',
    parentLabel:       'Beloved Son of',
    parents: [
      { name: '(Late) Muhammad Ali V', prefix: '' },
      { name: 'Nabeesu Kandakal',      prefix: '&' },
    ],
    address: {
      name:    'Thoufeeq Manzil',
      lines:   ['Thazhevayal, Punnol (PO)', 'Thalassery'],
    },
  },

  bride: {
    firstName:         'Fathimathul Shadha',
    fullName:          'Fathimathul Shadha C H',
    role:              'The Bride',
    parentLabel:       'Beloved Daughter of',
    parents: [
      { name: 'Saleem M T',   prefix: '' },
      { name: 'Shameema C H', prefix: '&' },
    ],
    address: {
      name:    "Sulaikha's",
      lines:   ['Thazhevayal, Punnol (PO)', 'Thalassery'],
    },
  },

  /* ── HOSTING FAMILY ─────────────────────────────────────── */
  host: {
    familyName:        'KANDAKAL FAMILY',
    hostName:          'Mrs. Nabeesu Kandakal',
    hostTitle:         'and Mr. Mushafa Pilakeel',
    inviteIntro:       'invite you to',
    navLogo:           'N & F',
  },

  /* ── DATES ───────────────────────────────────────────────── */
  dates: {
    displayRange:      '11 • 12 September 2026',
    displayDot:        '11 · 12 · 2026',
  },

  /* ── COUNTDOWN ───────────────────────────────────────────── */
  countdown: {
    nikkah: {
      label:   'Nikah Ceremony',
      // After Asar ≈ 16:15 IST on 11 Sep 2026
      target:  '2026-09-11T16:15:00',
    },
    reception: {
      label:   'Reception',
      target:  '2026-09-12T13:00:00',
    },
  },

  /* ── EVENTS ──────────────────────────────────────────────── */
  events: [
    {
      id:        'nikkah',
      type:      'Sacred Ceremony',
      title:     'Nikah',
      icon:      'fas fa-mosque',
      dayName:   'Friday',
      date:      '11 September 2026',
      time:      'After Asar Namaz',
      venue: {
        name:    'MEETHAL JUMA MASJID',
        address: 'Punnol',
      },
      mapsUrl:   'https://maps.app.goo.gl/JMFSur8UdPR8xhzY9',
      mapsLabel: 'Open Google Maps',
    },
    {
      id:        'reception',
      type:      'Celebration',
      title:     'Reception',
      icon:      'fas fa-star',
      dayName:   'Saturday',
      date:      '12 September 2026',
      time:      '1:00 PM – 3:00 PM',
      venue: {
        name:    "At Groom's Residence",
        address: 'Thoufeeq Manzil, Thazhevayal, Punnol (PO), Thalassery',
      },
      mapsUrl:   'https://maps.app.goo.gl/D3aV2cZHDfikkW1Q9',
      mapsLabel: 'Open Google Maps',
    },
  ],

  /* ── GALLERY IMAGES ──────────────────────────────────────── */
  gallery: [
    { src: 'assets/images/gallery-1.jpg', alt: 'Nihal & Fathimathul Shadha — Photo 1' },
    { src: 'assets/images/gallery-2.jpg', alt: 'Nihal & Fathimathul Shadha — Photo 2' },
    { src: 'assets/images/gallery-3.jpg', alt: 'Nihal & Fathimathul Shadha — Photo 3' },
    { src: 'assets/images/gallery-4.jpg', alt: 'Nihal & Fathimathul Shadha — Photo 4' },
    { src: 'assets/images/gallery-5.jpg', alt: 'Nihal & Fathimathul Shadha — Photo 5' },
  ],

  /* ── MUSIC ───────────────────────────────────────────────── */
  music: {
    src:    'assets/music.mp3',
    volume: 0.45,
  },

  /* ── REGARDS SECTION ─────────────────────────────────────── */
  regards: {
    heading: 'THANKS & LOVING',
    columns: [
      {
        role:   'Hosted By',
        names:  ['Mrs. Nabeesu Kandakal'],
      },
      {
        role:   'Hosted By',
        names:  ['Mr. Mushafa Pilakeel'],
      },
    ],
  },

  /* ── FOOTER ──────────────────────────────────────────────── */
  footer: {
    message:     'We look forward to celebrating this special day with you.',
    tagline:     'Best Compliments from Dear and Near Ones',
  },

};
