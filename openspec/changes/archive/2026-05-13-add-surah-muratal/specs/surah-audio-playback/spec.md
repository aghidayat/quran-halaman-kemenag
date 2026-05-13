## ADDED Requirements

### Requirement: Fetch Surah Audio
The system SHALL be able to retrieve a high-quality audio stream URL for any of the 114 surahs.

#### Scenario: Successful audio URL retrieval
- **WHEN** a surah is selected for playback
- **THEN** the system fetches the corresponding audio URL from the configured Quran API

### Requirement: Playback Control
The system SHALL provide a unified control to start and stop the audio recitation of the currently active surah.

#### Scenario: Start playback
- **WHEN** the user clicks the "Play" button for a surah
- **THEN** the system begins streaming the audio and changes the button icon to "Stop" or "Pause"

#### Scenario: Stop playback
- **WHEN** the user clicks the "Stop" button while audio is playing
- **THEN** the system ceases audio playback and resets the button icon to "Play"

### Requirement: Visual Feedback
The system SHALL provide visual indicators of the audio's current state (e.g., loading, playing, stopped).

#### Scenario: Display loading state
- **WHEN** the audio is being fetched or buffered
- **THEN** the system displays a loading indicator (e.g., a spinner or "Loading..." text)

#### Scenario: Display playing state
- **WHEN** the audio is actively playing
- **THEN** the system displays a "Playing" status or an animated wave icon

### Requirement: Contextual Playback
The system SHALL identify which surah is currently "active" based on the visible page and offer playback for that specific surah.

#### Scenario: Update playback target on navigation
- **WHEN** the user navigates to a page belonging to a different surah
- **THEN** the playback control updates to target the new surah, and any active playback is stopped to prevent overlap
