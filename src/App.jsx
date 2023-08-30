import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <h1>React Form</h1>
      <div style={{ margin: '10px' }}>
        <label style={{ marginRight: '10px' }}>Name:</label>
        <input style={{ borderRadius: '10px', padding: '10px', borderColor: 'white' }} placeholder='Name' />
      </div>
      <div style={{ margin: '10px' }}>
        <label style={{ marginRight: '10px' }}>Age:</label>
        <input style={{ borderRadius: '10px', padding: '10px', borderColor: 'white' }} placeholder='Age' />
      </div>
      <button onClick={() => { console.log('Submit Form') }} style={{ marginTop: '10px', backgroundColor: 'white' }}>Submit</button>
    </div>
  )
}

export default App
