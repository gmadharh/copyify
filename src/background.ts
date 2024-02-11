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
