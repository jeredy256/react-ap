import axios from 'axios'
import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [body, setBody] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:7777/get_data")
      .then((response) => {
        setBody(response.data.body)
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error)
      })
  }, [])
  
  return (
    <>
      {body}
    </>
  )
}

export default App
