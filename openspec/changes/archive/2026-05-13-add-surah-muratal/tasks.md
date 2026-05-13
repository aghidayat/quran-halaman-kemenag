## 1. Preparation and State Setup

- [x] 1.1 Analyze `App.tsx` to identify the best insertion point for audio state.
- [x] 1.2 Add state variables: `isPlaying` (boolean), `isLoading` (boolean), and `audio` (HTMLAudioElement ref).
- [x] 1.3 Implement a helper function to determine the current Surah ID based on the `rightPage`.

## 2. Audio Logic Implementation

- [x] 2.1 Create a function to fetch the audio stream URL for a specific Surah from the Al-Quran Cloud API.
- [x] 2.2 Implement the `toggleAudio` function to handle play, stop, and cleanup logic.
- [x] 2.3 Add a `useEffect` hook to ensure audio is stopped and resources are released when navigating to a different surah or unmounting the component.

## 3. UI/UX Development

- [x] 3.1 Import `Play`, `Square`, and `Loader2` icons from `lucide-react`.
- [x] 3.2 Integrate the audio control button into the sticky header, next to the Surah name.
- [x] 3.3 Style the button with Tailwind CSS, ensuring it matches the "Classic-Modern" theme.
- [x] 3.4 Add visual feedback for the loading state (e.g., spinning icon).

## 4. Finalization

- [x] 4.1 Test the playback functionality across different surahs.
- [x] 4.2 Verify that audio stops correctly when navigating or closing the app.
- [x] 4.3 Update `src/data/changelog.ts` with the new "Surah Muratal Playback" feature.
- [x] 4.4 Run `npm run deploy` to verify the build and update the version.
