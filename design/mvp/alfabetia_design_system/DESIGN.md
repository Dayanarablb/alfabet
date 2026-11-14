---
name: Alfabet Design System
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#444651'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#00311f'
  on-tertiary: '#ffffff'
  tertiary-container: '#004a31'
  on-tertiary-container: '#27c38a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Lexend
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Lexend
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Lexend
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Lexend
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 32px
  body-xl:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-bold:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  label-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 1.75rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a dignified, empowering, and respectful visual environment tailored specifically for youth and adult literacy learners in Ecuador. The emotional tone avoids any paternalistic, childish, or gamified schoolhouse clichés; instead, it projects civic institutional trust, personal autonomy, modern utility, and quiet encouragement.

The design movement combines **Humanist Modernism** with **Tactile Accessibility**:
- **Dignified Clarity:** Large surfaces, clear focal points, and generous touch regions prevent cognitive overload and physical frustration.
- **Multimodal Support:** Visual, auditory, and voice modalities are treated as first-class citizens rather than secondary accessibility fallbacks.
- **Supportive Non-Punitive Feedback:** Learning iterations use restorative amber/coral tones rather than punitive red alert treatments, preserving learner agency and confidence.
- **Ecuadorian Contextual Grounding:** Clean contrasts and daylight-friendly warm surfaces ensure visibility on mid-range and entry-level mobile devices under varying light conditions.

## Colors

The palette is engineered for maximum legibility (exceeding WCAG AAA for key actions and texts) on varied mobile screen qualities while evoking calm and self-assurance.

- **Primary (`#1E3A8A` / Active `#1D4ED8`):** Deep, stable navy blue conveying institutional reliability, clarity, and safety. Used for core navigation, high-priority interactive headers, and definitive anchors.
- **Secondary (`#D97706` / Highlight `#F59E0B`):** Warm amber tone reserved for forward motivation, key interactive triggers, and audio prompts. It brings warmth without anxiety.
- **Tertiary (`#10B981` / Background tint `#ECFDF5`):** Soft emerald green signaling success, affirmation, and validated progression.
- **Reinforcement / Restorative (`#F97316` / `#F87171` at low saturation):** Warm coral-amber used exclusively for "Inténtalo de nuevo" (try again) states. Never use high-chroma red or alarming error iconography.
- **Surfaces & Backgrounds:** The base canvas uses warm, descansado neutrals (`#F8FAFC` base surface, `#FFFFFF` elevated cards, `#F1F5F9` utility tracks) to prevent optical glare and reduce eye fatigue during reading sessions.
- **Text & Icon Neutral (`#0F172A` to `#334155`):** High-contrast deep slate ensuring crisp glyph rendering and effortless decoding.

## Typography

The design system exclusively utilizes **Lexend**, chosen for its scientifically researched glyph differentiation and variable tracking designed to improve reading speeds and comprehension for early and transitioning readers.

- **Baseline Floor:** No text element in standard user-facing instruction or exercise flows falls below `18px`. An absolute minimum of `16px` is strictly reserved for subtle peripheral metadata.
- **Letter Spacing & Open Apertures:** Generous inner shapes prevent characters like 'c', 'o', 'e', 'a' from blurring together. Tracking is slightly loose (`+0.01em` to `+0.02em`) on body text to reduce crowding.
- **Rhythmic Line Heights:** Line heights are maintained at a minimum of 1.5x on reading text to facilitate eye tracking between lines without physical finger-tracing requirements.
- **No All-Caps Paragraphs:** Never use uppercase transformations for instructions, sentences, or multi-word buttons, as whole-word shape recognition (bouma) is crucial for adult literacy acquisition.

## Layout & Spacing

The layout is built on a **single-column-first fluid grid** optimized for mobile PWA handheld ergonomics, expanding gracefully to centered, constrained cards on tablets and desktop screens.

- **Mobile Viewport (up to 640px):** Single-column layout. Margin is `1.25rem` (`20px`) to maximize touch real estate while maintaining safe edges. Key action targets and persistent voice/audio floating bars stay docked within natural thumb reach (bottom 35% of the screen).
- **Tablet & Desktop (641px and up):** Max layout reading container constrained to `680px` for instructional steps and `840px` for dashboards. This constraint keeps reading line length within an optimal 45–60 character range, preventing visual disorientation.
- **Breathing Room:** Gaps between distinct interactive targets must never drop below `space-md` (`1.25rem` / `20px`) to eliminate accidental miss-taps for users with varying motor control or tactile confidence.

## Elevation & Depth

Visual hierarchy employs a **Warm Tonal Layering with Tactile Lift** methodology. Instead of sharp drop shadows or sterile flat surfaces, interactive elements convey physical presence and tactile affordance.

- **Base Layer (Surface-0):** `#F8FAFC` warm neutral backdrop.
- **Content Cards (Surface-1):** `#FFFFFF` with a subtle perimeter boundary (`1.5px solid #E2E8F0`) and an ambient, low-slung shadow: `0 4px 12px -2px rgba(30, 58, 138, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)`.
- **Interactive Affordance (Buttons & Action Cards):** Features a distinct base border accent (`2px solid rgba(0,0,0,0.08)`) and an elevated resting shadow: `0 6px 16px -2px rgba(30, 58, 138, 0.12)`.
- **Pressed / Active State:** Tactile 2px downward translation (`translateY(2px)`) with shadow reduction to give a tangible, mechanical confirmation of touch.
- **Floating Modalities (Audio & Mic Controls):** High-layer surface floating above page flow with a deep ambient shadow: `0 12px 28px -4px rgba(30, 41, 59, 0.16)`.

## Shapes

The design system embraces an expansive, comfortable pill and super-rounded visual dialect (`roundedness: 3`).

- **Primary Interactive Targets:** Standard buttons and prominent input triggers feature full pill geometry (`rounded-full` / `9999px`) or ultra-soft corners (`rounded-2xl` to `rounded-3xl` / `1.5rem` to `2rem`).
- **Cards and Step Containers:** Uniformly rounded at `1.5rem` (`24px`), avoiding harsh, industrial right angles that feel intimidating or bureaucratic.
- **Pictogram & Icon Containers:** Rendered inside circular or squircle badges (`rounded-full` or `rounded-2xl`) with soft pastel tinted backings to reinforce visual meaning without sharp edges.

## Components

### 1. Buttons
- **Primary Action Button:** Minimum height `64px` (recommended `72px` on exercise screens). Full-width or expansive pill shape. Background is Deep Blue (`#1E3A8A`) or Action Amber (`#D97706`) with high-contrast bold text (`20px`). Always accompanied by an illustrative leading icon (e.g., arrow, checkmark, speaker).
- **Secondary & Auxiliary Buttons:** Minimum height `60px`. White background with a `2px` solid border (`#CBD5E1`) and `#0F172A` text.
- **Voice Action Button (Mic):** Prominent circular button (diameter `72px` to `80px`). Pulsing ambient halo when listening; amber/navy active indicator. Located in the persistent bottom interaction zone.

### 2. Omnipresent Audio Trigger (Altavoz)
- **Design:** Compact circular badge (minimum `52px × 52px`) or card-docked header button displaying a clear speaker icon with audio waves.
- **Placement:** Paired adjacent to every piece of instructional text, headline, and prompt card.
- **Behavior:** On touch, activates synchronized text-to-speech with real-time word highlighting in warm amber (`#FEF3C7` background).

### 3. Cards & Pictogram Containers
- **Visual Exercises:** Large touch cards (minimum `120px` height) combining a clear high-contrast icon or real-world photograph with clean, large typography below.
- **Selected State:** Thick `3px` primary blue outline with a soft blue tint background (`#EFF6FF`).
- **Affirmation State:** Soft emerald border (`#10B981`) and light emerald fill (`#ECFDF5`).
- **Try Again State:** Soft amber border (`#F59E0B`) with supportive prompt: *"Escucha otra vez"* accompanied by an auto-triggered audio clue.

### 4. Input Fields & Text Recognition
- **Touch-First Alternative:** Virtual phoneme and word chips rather than requiring complex hardware keyboard inputs.
- **Text Inputs:** Height minimum `64px`, large `20px` typed characters, prominent microphone button inside the right trailing edge for speech-to-text dictation.

### 5. Chips & Word Tiles
- **Height:** Minimum `54px`.
- **Geometry:** `rounded-2xl` with generous internal padding (`12px 24px`).
- **Typography:** `20px` weight 600.
- **Tactile Drag & Drop / Tap:** Provides instant audio-haptic click feedback when moved or selected.

### 6. Progress & Civic Navigation
- **Progress Trackers:** Segmented horizontal pill bars rather than dry numerical percentages. Active steps display bright emerald or amber markers; incomplete steps use warm muted slate (`#E2E8F0`).
- **Navigation Bar:** Fixed bottom dock with large visual pictograms and label text (no less than `16px`) for: *Aprender*, *Practicar*, *Mi Progreso*, *Ayuda*.