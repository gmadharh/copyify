/*
  Listener for tracking URL changes
  Matching url in active tab with open.spotify.com/track/
*/
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    (tab.url?.startsWith('http://open.spotify.com/track/') ||
      tab.url?.startsWith('https://open.spotify.com/track/'))
  ) {
    // Execute script to scrape song data if on a track webpage
    console.log('executing script')
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['src/script.js'],
    })
  }
})

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.local.set({
      songName: 'Go to Spotify song page to see the track info here!',
      artist: 'Artist Name',
      albumName: 'Album Name',
      image: 'https://picsum.photos/150',
    })
  }
})
