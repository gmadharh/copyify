async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true }
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  const [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'get-details') {
    chrome.scripting.executeScript({
      target: { tabId: await getCurrentTab() },
      files: ['script.ts'],
    })
  }
  return true
})
