## Why

Currently, the audio playback automatically stops when a user navigates to a different surah. This interrupts the listening experience if the user wants to browse other pages while listening. Additionally, the "Play" button only uses an icon, which might be less intuitive than a button with a text label.

## What Changes

- **Audio Persistence**: Modify the state management to allow audio to continue playing even when the user navigates to a different surah.
- **Audio Context State**: Move the audio control logic to be independent of the "active" surah navigation logic, ensuring the `stopAudio` is not triggered by surah ID changes in the UI.
- **UI Labeling**: Update the audio control button to include "Play" and "Stop" text alongside the existing icons for better accessibility and clarity.
- **Active Recitation Indicator**: Add visual feedback to show which surah is *actually* playing if it differs from the one currently being viewed.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `surah-audio-playback`: Update the requirement to allow background playback during navigation and add text labels to controls.

## Impact

- `src/App.tsx`: Refactor the `useEffect` that stops audio on surah change. Update the header UI for the audio button.
- `src/data/changelog.ts`: Update version and changes.
