import React, { Fragment, useState } from 'react'
import { SearchSuperheroes } from '../lib/Form'

function About() {

    const [name, setName] = useState("")
    const [data, setData] = useState([])

    const handleSubmit = () => {
        SearchSuperheroes(name)
            .then(response => {
                setData(response.content)
            }).catch(err => console.error(err))
    }

    return (
        <div>
            <h1>React Suprheroes Search!</h1>
            <div style={{ margin: '10px' }}>
                <label style={{ marginRight: '10px' }}>Name:</label>
                <input onChange={(event) => setName(event.target.value)} style={{ borderRadius: '10px', padding: '10px', borderColor: 'white' }} placeholder='Name' />
            </div>
            <div style={{ marginTop: '50px' }}>
                <h3>Your Content:</h3>
                <p>{data.length !== 0 ? data.map(object => (
                    <Fragment>
                        <p>Superhero name: {object.name}</p>
                        <p> description: {object.description}</p>
                    </Fragment>
                )) : 'There is no Content to show'}</p>
            </div>
            <button onClick={() => { handleSubmit() }} style={{ marginTop: '10px', backgroundColor: 'white' }}>Submit</button>
        </div>
    )
}

export default About