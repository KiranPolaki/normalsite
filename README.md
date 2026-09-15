# Portfolio #

## Preview ##
![image](https://github.com/user-attachments/assets/325a9b28-5ced-44e1-8ffe-b14d114cd0fd)

## Tech Stack ##
 - Nextjs
 - VectorDB
 - Shadcn

## Case studies ##

Projects live in `app/data/projectsData.js`. A project renders through one of two templates:

- **Legacy** — anything without a `media` block keeps the original layout.
- **Rich** — add a `media` block and the page renders through
  `app/(with-footer)/case-study/[slug]/_components/RichCaseStudy.jsx`:
  hero shot → metrics strip → at-a-glance → context → overview → what I owned →
  numbered problem/solution stories (each can carry its own screenshot) → architecture →
  product tour → features + engineering notes → takeaways → stack.

### Turning screenshots on and off ###

Every screenshot is declared once in `media.shots`, keyed by a short id:

```js
media: {
  showHero: true,        // false hides the hero image
  showTour: true,        // false hides the whole product-tour section
  hero: "dashboard",     // which shot is the hero
  tour: ["student-quiz", "books-admin"],   // order of the tour; omit to use all shots
  shots: {
    dashboard: { enabled: true, src: fpDashboard, title: "…", caption: "…" },
  },
}
```

- `enabled: false` on a shot removes it **everywhere** — hero, challenge, and tour.
- A challenge can pin a screenshot next to its story with `shot: "chatbots-admin"`.
- Shots used as the hero or inside a challenge are automatically skipped in the tour
  (set `media.dedupe: false` to show them twice).

Note: `app/globals.css` has a legacy `h2 { opacity: 0 }` rule for the card-hover effect —
any new heading needs `opacity-100` to be visible.
