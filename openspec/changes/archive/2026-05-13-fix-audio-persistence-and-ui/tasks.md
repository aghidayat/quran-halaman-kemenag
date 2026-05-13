## 1. Audio Logic Refactor

- [x] 1.1 Identify and remove the `useEffect` that calls `stopAudio()` when `getCurrentSurah.id` changes.
- [x] 1.2 Verify that audio now persists across navigation.

## 2. UI Updates

- [x] 2.1 Update the audio button in the header to include "Play" / "Stop" labels.
- [x] 2.2 Add CSS/Tailwind classes to ensure text labels and icons are correctly aligned.
- [x] 2.3 Verify the "Play" / "Stop" labels reflect the correct current state.

## 3. Verification

- [x] 3.1 Test audio persistence when switching surahs.
- [x] 3.2 Ensure accessibility of the play/stop controls.
