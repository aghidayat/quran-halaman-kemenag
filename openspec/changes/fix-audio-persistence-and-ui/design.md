## Context

The current audio implementation in `App.tsx` has a `useEffect` that calls `stopAudio()` whenever `getCurrentSurah.id` changes. This stops the audio even if the user only navigates to a different page within the same surah (though current logic targets page transitions, the surah context logic might trigger unexpectedly) or if they intend to keep listening while browsing.

## Goals / Non-Goals

**Goals:**
- Decouple audio playback lifecycle from surah navigation.
- Update the UI to include text labels ("Play", "Stop") for the audio button.

**Non-Goals:**
- Complex playback UI (e.g., full player bar).

## Decisions

### 1. Decoupling Playback
**Decision**: Remove the `useEffect` that triggers `stopAudio()` on `getCurrentSurah.id` change.
**Rationale**: Audio should persist until the user explicitly stops it or closes the player.

### 2. Button UI
**Decision**: Update the Play/Stop button to include a `span` element with the text "Play" or "Stop" (or "Putar"/"Berhenti") depending on state.
**Rationale**: Better accessibility.

## Risks / Trade-offs

- **[Risk] Syncing UI**: The header UI currently shows the name of the *current* surah (viewed page). If the user plays Surah A, then navigates to Surah B, the audio controls will look like they belong to Surah B while audio for Surah A plays. 
- **[Mitigation]**: Add a visual indicator showing the currently playing surah if it differs from the one viewed.
