## Why

Users currently can only read the Al-Quran pages. Adding a muratal (audio recitation) feature allows users to listen to the recitation of each surah, providing a more immersive and spiritual experience, especially for those who want to improve their pronunciation or simply enjoy the recitation while reading.

## What Changes

- **Audio Player Integration**: Addition of a global audio player state to handle surah recitations.
- **Surah-Specific Audio**: Ability to play audio for the currently viewed or selected surah.
- **UI/UX Enhancements**:
  - Addition of a "Play/Stop" button in the header.
  - Progress indicator for the audio playback.
  - Visual feedback when audio is loading or playing.
- **External API Integration**: Fetching audio stream URLs from a reliable Quran audio API (e.g., [EveryAyah](http://www.everyayah.com) or [Al-Quran Cloud](https://alquran.cloud/api)).

## Capabilities

### New Capabilities
- `surah-audio-playback`: Manages fetching audio metadata and controlling the playback of surah-level recitations.

### Modified Capabilities
- None.

## Impact

- `src/App.tsx`: UI changes to include the audio controls and state management.
- State management: New state for tracking the current playing surah, playback status, and audio object.
- External Dependencies: None (native HTML5 Audio API will be used).
