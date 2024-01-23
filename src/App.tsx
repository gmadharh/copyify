// click a button
// executes a script where it grabs the song name, artist and album
// displays those in the text field
import './index.css'

function App() {
  function getDetails() {
    chrome.runtime.sendMessage('get-details', (response) => {
      console.log('received response', response)
    })
  }
  return (
    <>
      <button className="details-btn" onClick={getDetails}>
        Get details
      </button>
      <input className="text-field" type="text" readOnly></input>
    </>
  )
}

export default App
