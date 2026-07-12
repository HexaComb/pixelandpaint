# Pixel & Paint

A clean, branded foundation for the Pixel & Paint website, built with the latest stable Next.js App Router, React, TypeScript, and Tailwind CSS.

## About the organization

Pixel & Paint is a Fresno-based community arts and technology initiative. Its public Instagram bio describes **free art + technology pop-ups for kids in low-income housing communities**, where culture, creativity, and joy collide.

Research source: [@_pixelandpaint on Instagram](https://www.instagram.com/_pixelandpaint/)

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 with App Router |
| UI | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Fonts | Archivo Black and DM Sans through `next/font` |
| Instagram feed | [Behold](https://behold.so) via `@behold/react` |
| Package manager | pnpm |

## Instagram feed (Behold)

The homepage carousel loads recent posts from [@_pixelandpaint](https://www.instagram.com/_pixelandpaint/) through Behold. Behold refreshes on its own schedule (typically within a few hours), so new Instagram posts appear without redeploying.

### Setup

1. Create a Behold account (prefer an org-owned email) and connect `@_pixelandpaint`.
2. Create a feed with a **carousel** layout and minimal widget chrome.
3. Copy the feed ID from Embed Code in the Behold dashboard.
4. Set the env var locally and in Vercel:

```bash
NEXT_PUBLIC_BEHOLD_FEED_ID=your-feed-id
```

Copy `.env.example` to `.env.local` and fill in the value for local development. Without this variable, the site still builds and shows a fallback linking to Instagram.

## Brand foundation

The public Instagram avatar and feed use a warm yellow canvas, dark navy outlines and type, and saturated art-and-technology accents. These web-ready colors are defined as CSS custom properties and Tailwind theme tokens in `app/globals.css`.

| Token | Hex | Tailwind utility example |
|---|---:|---|
| Pixel Yellow | `#FFC83D` | `bg-brand-yellow` |
| Ink Navy | `#102A43` | `text-ink-navy` |
| Pixel Pink | `#F2388A` | `bg-brand-pink` |
| Digital Blue | `#248FCE` | `bg-brand-blue` |
| Community Green | `#36B86A` | `bg-brand-green` |
| Brush Orange | `#FF6B35` | `bg-brand-orange` |
| Coral Red | `#EE3E47` | `bg-brand-coral` |
| Canvas Cream | `#FFF7E5` | `bg-canvas-cream` |

These values are practical approximations derived from the public profile artwork and representative Instagram posts. Replace them with official brand specifications if those become available.

## Official logo

The downloaded public Instagram profile image is stored at:

```text
public/pixelandpaint-logo.jpg
```

It is used on the homepage, in Open Graph metadata, and as the basis for the app icon.

## Getting started

```bash
pnpm install
cp .env.example .env.local   # then set NEXT_PUBLIC_BEHOLD_FEED_ID
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Project structure

```text
app/
  globals.css   # Tailwind import, brand tokens, and global visual system
  icon.jpg      # App icon derived from the official profile image
  layout.tsx    # Metadata, fonts, and root layout
  page.tsx      # Branded homepage + Instagram section
components/
  instagram-feed.tsx  # Behold carousel client wrapper
public/
  pixelandpaint-logo.jpg
.env.example    # NEXT_PUBLIC_BEHOLD_FEED_ID
ideas.md        # Recorded visual direction and design decisions
```
