import {useState, useEffect} from "react"
import axios from "axios"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos]=useState()

  useEffect(()=>{
    //fetch(`${API_URL}`)
    //.then((resp)=>resp.json())
    axios.get(`${API_URL}assets`)
    .then((data)=>{
      setCriptos(data.data.data)
    })
    .catch(()=>{
      console.error("la petición falló")
    })
  },[])

  if(!criptos) return <span> Cargando...</span>

  return (
    <>
    <h1>Lista de criptomonedas</h1>
    <ol>
      {
        criptos.map(({id,name,priceUsd})=>(
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        ))
      }
    </ol>
    </>
  )
}

export default App
