chrome.runtime.onMessage.addListener((message /*, sender, sendResponse*/) => {
  if (message === 'get-details') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
      // Execute your content script on the current page
      chrome.scripting
        .executeScript({
          target: {
            tabId: tab[0]?.id ?? 0,
          },

          files: ['script.ts'],
        })
        .then(() => console.log('script injected'))
        .catch((err) => {
          console.log(err)
        })
    })
  }
})
