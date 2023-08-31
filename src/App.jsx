import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PostData } from './lib/Form'


function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)


  const handleSubmit = () => {
    PostData({ name, age }).then((response) => console.log(response))
      .catch(err => console.log(err))
    // .catch(err => console.error(err))
  }

  return (
    <div >
      <h1>React Form</h1>
      <div style={{ margin: '10px' }}>
        <label style={{ marginRight: '10px' }}>Name:</label>
        <input onChange={(event) => setName(event.target.value)} style={{ borderRadius: '10px', padding: '10px', borderColor: 'white' }} placeholder='Name' />
      </div>
      <div style={{ margin: '10px' }}>
        <label style={{ marginRight: '10px' }}>Age:</label>
        <input onChange={(event) => setAge(event.target.value)} style={{ borderRadius: '10px', padding: '10px', borderColor: 'white' }}
          placeholder='Age' />
      </div>
      <button onClick={() => { handleSubmit() }} style={{ marginTop: '10px', backgroundColor: 'white' }}>Submit</button>
    </div>
  )
}

export default App
