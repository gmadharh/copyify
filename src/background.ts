chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    (tab.url?.startsWith('http://open.spotify.com/track/') ||
      tab.url?.startsWith('https://open.spotify.com/track/'))
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['src/script.js'],
    })
  }
})
