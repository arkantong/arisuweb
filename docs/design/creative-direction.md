# ARISU — creative direction

Source of truth: the supplied 20-page ARISU Creative PDF. Use ARISU consistently; do not carry over the deck's residual “lunch” naming. Gulo Bakes is one case study, not several clients. No invented results, metrics, testimonials, awards or team information.

## Section specifications

Concepts generated in this session (originals preserved outside the application):

- Hero: `/workspace/generated_images/exec-1f98b4c5-54b9-4b17-a22d-115011f5c180.png`
- Studio/services: `/workspace/generated_images/exec-92709f41-2924-434f-8dc4-f268c0d6118c.png`
- Work: `/workspace/generated_images/exec-a74c681d-b7eb-4fb2-9ee4-ba5a06a3166c.png`
- Approach: `/workspace/generated_images/exec-add4f7d0-f37f-44f2-b970-0a1ceedb5963.png`
- Contact: `/workspace/generated_images/exec-76065691-1aac-4c9e-908f-1a2ff7dce217.png`

All concepts are 1536 × 1024. They are implementation references selected by the assistant under the user's request to build, not separately approved by the user.

## Design system

- Background midnight black `#08090e`; text `#f5f5f7`; secondary `#a5a8b7`; thin border `#30323e`; cyan `#9be8f6`; violet `#bd9bf5`.
- Space Grotesk variable, locally hosted. Headlines tightly tracked, 500–600 weight. Body 16–20px with 1.6 line height; utility labels 11px with generous tracking. Hero scales from 60px on phones to 116px on desktop.
- Desktop content max width 1600px, 56–64px gutters. Tablet 32px and mobile 24px. Open editorial layouts; no enclosing cards or bento grids.
- White primary pill buttons, thin outlined secondary pills, diagonal arrow icons with 1.5px strokes. Shared focus ring and ≥44px targets.
- Hero is left copy / right abstract glass knot, seamless black with edge blending only, no tint over artwork. Contact repeats this with a ribbon. Studio has right-aligned narrative followed by four full-width service links. Work uses an asymmetric image composition. Process uses an open five-step line.
- Original ARISU logo and original Gulo Bakes images take precedence over generated concept approximations. Generated art is only the abstract knot/ribbon, never substituted client work.

## Copy and interaction inventory

Above-fold copy: ARISU; Studio; Services; Work; Approach; Let's talk; Great ideas. Excellent craft.; We turn ideas into crafted visual experiences.; Explore our work; Discover ARISU; DESIGN-DRIVEN. DETAIL-OBSESSED.; SCROLL TO EXPLORE.

Section order: hero → studio/services → selected work → approach → contact/footer. Service names and capabilities, process order, contact details follow the deck. English editorial copy follows the deck language.

Actions: section navigation; mobile menu; service-specific email links; project details dialog with genuine deck images; email, WhatsApp, Instagram; back to top. Native dialog supplies focus containment and Escape dismissal; closing restores trigger focus.

Motion: finite entrance; subtle pointer-responsive hero; scroll reveals and process line progress. Reduced motion disables these effects. No scroll hijacking or autoplay audio/video. Content remains readable without JavaScript.

## Deliberate adaptations

Use the authentic ARISU logo rather than Image Gen's approximation. Use original Gulo artwork rather than invented mockups in the concept. On mobile, stack hero art below copy, service descriptions below titles, and process vertically. Contact links wrap instead of shrinking. Project details dialog extends the concept to make its CTA functional.

The packaging image embedded in the PDF is only 416 × 281px. To avoid enlarging it into a blurry hero, the actual 1000px-wide Gulo identity graphic occupies the main case-study frame and packaging occupies the smaller companion frame. The page preserves authentic client artwork rather than synthesizing replacement packaging. The dark text on the Orange Sunshine swatch is slightly darker than the brand brown to meet text contrast requirements. The header stays visible during navigation; its thin progress indicator reflects actual page scroll.

## Asset provenance

`arisu-logo.png`, `gulo-*`: directly extracted embedded images from user-supplied PDF. `idea-knot.webp`, `glass-ribbon.webp`: generated for this website, optimized from original production asset passes. Space Grotesk: Fontsource 5.3.0, SIL OFL license included next to the font. No external font/CDN requests required at runtime.

## Light and dark themes

The header offers a keyboard-accessible theme switch. On the first visit, follow `prefers-color-scheme`; an explicit choice is saved as `arisu-theme` in localStorage and synchronized across tabs. Apply the theme in a small fixed inline script before the page paints to avoid a flash of the wrong theme. Storage errors must not block theme switching. Without an explicit choice, continue following OS changes.

Light uses pure white `#ffffff`, ink `#171822`, secondary `#5c6070`, teal `#006b83` and violet `#7042ba`. Use darker gradient text and timeline accents for contrast. The ARISU wordmark preserves the original PDF soft mask, with a black treatment on white. Client artwork retains its original colors. Project dialog chrome follows the selected theme while Gulo color swatches retain their brand colors.

`idea-knot-light.webp` and `glass-ribbon-light.webp` are dedicated white-background artwork variants generated from the original dark artwork. They share its framing and aspect ratio so theme switching does not move page content. The small-screen header uses an icon switch; the contact link remains available in the mobile navigation and contact section.
