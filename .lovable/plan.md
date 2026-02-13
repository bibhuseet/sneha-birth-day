

## Fix: Music Plays on Desktop but Not on Mobile

### Root Cause
Line 37 in `HeroSection.tsx` calls `startMusic()` automatically via a `setTimeout` — **not from a user tap/click**. Desktop browsers are lenient and allow this, but mobile browsers (especially iOS Safari) strictly block `audio.play()` unless it's triggered directly by a user gesture (like tapping a button).

### The Fix
Move the music start to the **"Start Celebrating" button tap** — the first real user interaction on the page. This satisfies mobile browser autoplay policies.

### Changes

**File 1: `src/components/HeroSection.tsx`**
- Remove `setTimeout(() => startMusic(), 500)` from the phase 1 block (line 37)
- Add `startMusic()` inside the `handleScroll` callback so it fires when the user taps "Start Celebrating"

**File 2: `src/contexts/AudioContext.tsx`**
- Update `startMusic` to try unmuted playback first; if the browser still blocks it, fall back to muted playback so at least the audio element is "active" and the user can unmute via the button

### What Stays the Same
- All animations and typewriter timing unchanged
- Mute/unmute button stays in top-right, works the same
- Video auto-mute/resume behavior unchanged
- Layout, styling, responsiveness all untouched
- Music still loops

### Result
- On mobile: user taps "Start Celebrating" -> music begins playing
- On desktop: same behavior (works just as before, just slightly later)
- Mute button continues working correctly

