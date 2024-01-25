chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('recieved from sender: ', sender)
  if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' })
})
