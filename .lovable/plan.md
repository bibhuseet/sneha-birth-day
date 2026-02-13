## UI and Animation Refinements

Three targeted updates to the video section heading, video description, and hero section description animation.

### 1. Video Section -- Add Heading and Description

**File: `src/components/VideoSection.tsx**`

Add a multi-line heading above the video container with fade-in animation:

```
Special Gift
for the
Most Amazing Person ✨💖🌸
```

Add a small description below the video container:

```
Hope you like it!
```

- Heading uses `font-cursive`, centered, with `motion` fade-in + slide-up
- Each line rendered separately for intentional line breaks
- Description uses small, soft muted-foreground text with its own fade-in animation
- Emojis kept at normal text size

### 2. Hero Section -- Replace Typewriter with Fade-In for Description

**File: `src/components/HeroSection.tsx**`

- Remove the letter-by-letter interval logic in phase 2
- Instead, when phase reaches 2, set a `showMessage` boolean to `true`
- Render the full message text inside a `motion.p` with `opacity: 0 -> 1` and `y: 15 -> 0` over ~0.8s
- Remove the `messageText` state and `typewriter-cursor` for the description
- Keep the `showButton` trigger after a delay (~1.2s after phase 2 starts)
- Title typewriter and "Sneha" pop-in remain untouched

### Technical Details

- No changes to music logic, mute button, layout, fonts, or responsiveness
- All animations use framer-motion for consistency
- Video section heading split into 3 lines via explicit `<br />` or `block` spans