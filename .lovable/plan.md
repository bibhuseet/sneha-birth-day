

## Start Hero Animation Only After "Open" is Clicked

Currently, the HeroSection typewriter animation begins immediately when the page loads, even while the welcome overlay is still visible. The fix ensures the animation waits until the user taps "Open."

### Changes

**1. `src/pages/Index.tsx`**
- Pass the `entered` state as a prop to `HeroSection`: `<HeroSection started={entered} />`

**2. `src/components/HeroSection.tsx`**
- Accept a `started` prop (boolean)
- Gate the typewriter animation: only begin phase 0 when `started` is `true`
- Change the initial `phase` state to `-1` (idle) instead of `0`
- Add a `useEffect` that sets `phase` to `0` when `started` becomes `true`

### Result
- User sees the welcome overlay with "Open" button
- Taps "Open" -> overlay fades out, music starts, and THEN "Happy Birthday" begins typing
- All other animations (name reveal, message, button) follow in sequence as before

