# Pixel & Paint Design Direction

## Three Directions Considered

### Theme Name: Sunny Pixel Workshop
**Very Brief Intro:** A cheerful, poster-inspired homepage that treats the official yellow logo field as the visual anchor, with navy structure and tightly controlled bursts of pink, blue, green, and orange.
**Probability:** 0.03

### Theme Name: Community Collage Board
**Very Brief Intro:** A tactile bulletin-board composition with layered paper shapes, candid workshop imagery, taped labels, and hand-made energy.
**Probability:** 0.07

### Theme Name: Digital Art Club
**Very Brief Intro:** A cleaner technology-forward direction using pixel grids, bright interface bands, and modular educational cues while retaining the youth-centered palette.
**Probability:** 0.01

## Chosen Direction: Sunny Pixel Workshop

### Design Movement

Contemporary community-poster design influenced by mid-century children’s educational graphics, screen-printed event flyers, and playful pixel art.

### Core Principles

1. **Brand first:** The official profile logo remains the central visual and the palette follows the public Instagram artwork.
2. **Joy with structure:** Saturated colors communicate youthful energy, while dark navy typography and generous spacing maintain clarity.
3. **Minimal but ownable:** The page stays intentionally sparse as a development scaffold, but avoids looking like an untouched starter template.
4. **Accessible playfulness:** Every color pairing maintains readable contrast and decorative motion respects reduced-motion preferences.

### Color Philosophy

Warm yellow acts as a field of optimism and welcome. Navy gives the palette authority and legibility. Hot pink, digital blue, community green, orange, and coral appear only as small pixel-like signals, reflecting the organization’s fusion of art, technology, and youth culture. Canvas cream gives future pages a softer neutral surface than pure white.

### Layout Paradigm

An asymmetric two-zone composition: concise mission copy on the left and the official logo in a large framed art panel on the right. A narrow pixel ribbon runs along the page edge, and a compact brand-token strip below the hero signals that this is a deliberate foundation for future development.

### Signature Elements

1. **Pixel clusters:** Small stepped squares that echo the logo’s digital blocks.
2. **Painted color bars:** Short saturated bands inspired by the Instagram event posters.
3. **Navy keylines:** Strong dark outlines around major brand surfaces, mirroring the illustration style of the official logo.

### Interaction Philosophy

The scaffold has very few interactions. Links use quick color and position changes, and the logo panel has a subtle lift on hover. The response should feel immediate and tactile, never ornamental or sluggish.

### Animation

Initial content may fade upward by 8–12 pixels with a 220–300 millisecond custom ease-out. Pixel accents can enter with a short stagger of 40 milliseconds. Hover movement is limited to two pixels and button press feedback uses `scale(0.97)`. All non-essential motion is disabled when `prefers-reduced-motion` is enabled.

### Typography System

Use **Archivo Black** for short display headlines and **DM Sans** for body copy and metadata. Headlines are compact, high-contrast, and slightly tightened; body text remains open and readable. Avoid Inter and generic geometric headings.

### Brand Essence

**Positioning:** Free art and technology experiences for Fresno youth, brought directly into underserved communities so creativity and opportunity can grow together.

**Personality:** Joyful, resourceful, community-rooted.

### Brand Voice

Headlines sound active, hopeful, and plainspoken. Calls to action are inviting rather than corporate. Microcopy is concise and neighborhood-aware.

Example lines:

- “Creativity belongs in every neighborhood.”
- “Art, tech, and big ideas—brought to the community.”

### Wordmark & Logo

Use the official Instagram profile artwork as the source of truth: a pixel-grid symbol paired with a diagonal paintbrush, outlined in navy, plus the custom “PIXEL AND Paint” lettering. Do not recreate the mark in a default font. The large logo panel and favicon should both derive from this official asset.

### Signature Brand Color

**Pixel Yellow — `#FFC83D`**. This optimistic yellow dominates the public logo and event graphics and should remain the most recognizable web surface.

## Style Decisions

- Keep the initial homepage deliberately minimal because this repository is a clean foundation, not a complete marketing website.
- Store the official avatar at `public/pixelandpaint-logo.jpg` as explicitly requested for the GitHub and Vercel project, despite the managed preview’s normal external-asset preference.
- Use CSS custom properties in `app/globals.css` so the palette is directly available to Tailwind CSS 4 utilities and future components.
