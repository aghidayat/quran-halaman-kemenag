## Context

The current application is a React-based Quran reader. It handles navigation via surah selection and page input. Adding audio requires managing a persistent audio object across component re-renders and handling asynchronous loading of audio files.

## Goals / Non-Goals

**Goals:**
- Provide a simple "one-click" audio experience for the currently viewed surah.
- Use a lightweight approach (HTML5 Audio) without heavy external libraries.
- Ensure the UI remains responsive and provides feedback on the audio state.

**Non-Goals:**
- Per-ayah (verse) playback.
- Playlist management or advanced playback controls (speed, loop, etc.).
- Offline audio storage.

## Decisions

### 1. Audio Source API
**Decision**: Use the Al-Quran Cloud API (`https://api.alquran.cloud/v1/surah/<number>/ar.alafasy`) to get audio metadata or direct URLs if possible.
**Rationale**: Al-Quran Cloud is stable, well-documented, and provides high-quality recitations (Mishary Rashid Alafasy).
**Alternatives**:
- `EveryAyah.com`: Good but often serves ayah-by-ayah which requires complex stitching for surah-level play.
- `Quran.com API`: Robust but more complex than needed for a simple surah stream.

### 2. State Management for Audio
**Decision**: Use a singleton `Audio` object managed via a `useEffect` hook in `App.tsx`.
**Rationale**: Prevents multiple audio instances from playing simultaneously and ensures the audio stops when the component unmounts or the surah changes.

### 3. UI Implementation
**Decision**: Add a "Play Surah" button in the sticky header.
**Rationale**: Keeps the control always accessible regardless of scroll position, which is consistent with the current navigation design.

## Risks / Trade-offs

- **[Risk] Network Latency** → **Mitigation**: Implement a loading state (spinner) while the audio is buffering.
- **[Risk] Audio Overlap** → **Mitigation**: Ensure any existing `Audio` object is paused and garbage collected before starting a new one.
- **[Risk] Mobile Data Usage** → **Mitigation**: Audio will only load/play upon explicit user interaction (click).
