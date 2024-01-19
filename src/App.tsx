// click a button
// executes a script where it grabs the song name, artist and album
// displays those in the text field
import './index.css'
import run from './script.ts'

function App() {
  return (
    <>
      <button className="details-btn" onClick={run}>
        Get details
      </button>
      <input className="text-field" type="text" readOnly></input>
    </>
  )
}

export default App
