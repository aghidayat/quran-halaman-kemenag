## MODIFIED Requirements

### Requirement: Playback Control
The system SHALL provide a unified control to start and stop the audio recitation of the currently active surah. The control MUST display text labels ("Play" / "Stop") for better accessibility.

#### Scenario: Persistent playback on navigation
- **WHEN** the user starts audio playback for a surah and navigates to a different page or surah
- **THEN** the audio playback continues uninterrupted in the background

#### Scenario: Update playback control labels
- **WHEN** the user is viewing the playback control
- **THEN** the button displays the correct text "Play" or "Stop" along with the icon corresponding to the current state

#### Scenario: Indicate playing surah
- **WHEN** the user is viewing a page for Surah B, while Surah A is playing
- **THEN** the UI displays an indicator showing that Surah A is the active playback target
