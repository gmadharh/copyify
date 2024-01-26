document.addEventListener('DOMContentLoaded', function () {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log('index.ts recieved track', request.info)
  })
})
