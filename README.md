# Copyify

A lightweight browser extension that adds one-click copy buttons directly on Spotify track pages.

Spotify doesn't let you highlight or select text on track pages. Copyify solves this by injecting small, elegant copy buttons right next to the song name, artist, and album — no popup needed, just instant copying!

<img width="1352" height="369" alt="Screenshot 2025-09-30 at 12 58 11 PM" src="https://github.com/user-attachments/assets/33f94e22-dfd2-49f8-8d70-f5cf5ceda17d" />

## ✨ v2.0 Features

- 🎯 **Inline Copy Buttons** - Buttons appear directly next to track info on the page
- ⚡ **One-Click Copy** - Click any button to instantly copy song, artist, or album name
- ✅ **Visual Feedback** - Green checkmark confirmation when text is copied
- 🪶 **Super Lightweight** - Rebuilt without Vue/React, pure TypeScript for speed
- 🎨 **Seamless Design** - Buttons blend naturally with Spotify's dark theme

[Chrome Web Store](https://chromewebstore.google.com/detail/spotify-song-extractor/mnaooedpbbimbgcjlfebmkomloakbeag?hl=en&authuser=2) | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/copyify/)

## Build Instructions

1. Navigate to the project folder: `cd ~/path/to/copyify`
2. Install dependencies: `npm install`
3. Copy the appropriate manifest:
   - Chrome: `cp chrome/manifest.json manifest.json`
   - Firefox: `cp firefox/manifest.json manifest.json`
4. Build the extension: `npm run build`
5. Output will be in the `dist/` folder

### Loading for Development

- **Chrome**: Go to `chrome://extensions/`, enable Developer Mode, click "Load unpacked", select `dist/` folder
- **Firefox**: Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", select `dist/manifest.json`
