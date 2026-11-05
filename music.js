/*
 * ============================================================
 *  JEOPARDY! — SONGS & MUSIC (editable)
 * ============================================================
 *  The game does NOT include copyrighted songs. Add your own legally
 *  obtained MP3 or WAV clips in one of two ways:
 *
 *   A) Put the files in the "audio" folder next to index.html using the
 *      exact file names below (e.g. audio/song-100.mp3), or
 *   B) Use the in-game "AUDIO SETUP" screen (start screen) or the UPLOAD
 *      button inside a music question. Uploaded clips are saved in this
 *      browser and work offline.
 *
 *  Fields:
 *   file        – file name inside the audio folder (.mp3 or .wav)
 *   title       – song title (hidden until the host clicks REVEAL ANSWER)
 *   artist      – performer
 *   info        – optional extra line shown with the answer
 *   startAt     – second in the file where the clip starts (skip intros!)
 *   clipSeconds – how long the clip plays (5–10 seconds)
 *
 *  If you use different songs, change title/artist here too (or in AUDIO SETUP).
 */
window.JEOPARDY_MUSIC = {
  name: "SONGS & MUSIC",
  tracks: [
    { points: 100, file: "song-100.mp3", title: "Blinding Lights", artist: "The Weeknd", info: "2019 · Modern pop", startAt: 0, clipSeconds: 8 },
    { points: 200, file: "song-200.mp3", title: "Shape of You", artist: "Ed Sheeran", info: "2017 · 2010s hit", startAt: 0, clipSeconds: 8 },
    { points: 300, file: "song-300.mp3", title: "Umbrella", artist: "Rihanna feat. Jay-Z", info: "2007 · 2000s hit", startAt: 0, clipSeconds: 7 },
    { points: 400, file: "song-400.mp3", title: "My Heart Will Go On", artist: "Céline Dion", info: "1997 · Theme from the film \"Titanic\"", startAt: 0, clipSeconds: 7 },
    { points: 500, file: "song-500.mp3", title: "Bohemian Rhapsody", artist: "Queen", info: "1975 · Classic rock", startAt: 0, clipSeconds: 6 }
  ]
};
