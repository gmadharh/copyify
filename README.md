![icon](https://github.com/gmadharh/spotify-song-extractor/assets/58638508/32a0ab9f-18ed-4b26-921a-397a4671f63b)

# Copyify

A Browser extension to easily copy and paste the song name, album, or artist from a Spotify song web page.

This is because it doesn't allow you to highlight any text with the cursor, so this makes it easy by automatically extracting the details and a button to copy it to the clipboard

[Chrome](https://chromewebstore.google.com/detail/spotify-song-extractor/mnaooedpbbimbgcjlfebmkomloakbeag?hl=en&authuser=2)
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/copyify/)

## Demo

<img src="https://github.com/gmadharh/copyify/assets/58638508/b9325e51-24c5-4dd3-a2ef-167db2f0c381" />

## Build Instructions

1. Be in root folder `pwd ~/**/copyify`
2. Ensure you have nvm and Nodejs installed and run `nvm install` to use the correct node version
3. Move `manifest.json` from `chrome` or `firefox` folder into root directory depending on which browser you want to build for'
4. Run `npm i` to install all required packages
5. Run `npm run build` to build extension, output will be in the `dist` folder
