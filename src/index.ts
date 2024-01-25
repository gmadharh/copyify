document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('clickMe')
  button?.addEventListener('click', function () {
    // send a message to the service worker
    // then that send a message to content script
    chrome.runtime.sendMessage({ action: 'clicked button' })
  })
})
