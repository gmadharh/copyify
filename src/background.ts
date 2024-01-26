chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  console.log('recieved from sender: ', sender)
  let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
  chrome.scripting.executeScript({
    target: { tabId: tab.id ?? 0 },
    files: ['script.js'],
  })
})
