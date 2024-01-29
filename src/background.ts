chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(tabId, changeInfo, tab)
  if (
    tab.url?.startsWith('http://open.spotify.com/track/') ||
    tab.url?.startsWith('https://open.spotify.com/track/')
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['script.js'],
    })
  }
})
