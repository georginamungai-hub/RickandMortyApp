import { useEffect, useState } from 'react'
import './App.css'
import {Link} from "react-router-dom"


function Rick() {
  
    const[characters, setCharacters] = useState([])
    const [searchValue, setValue] = useState("")

    const fetchCharacters = async()=>{
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const data = await response.json()

      setCharacters(data.results)
    }

    const handleChange = (e)=>{
      setValue(e.target.value)
    }

    useEffect (()=>{
      fetchCharacters()
    },[])
  

  return (
    <>
    <div>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
      {
        characters.filter((char)=>{
          if (searchValue === "" || char.name.toLowerCase().includes (searchValue.toLowerCase())){
            return char
          }
        }).map((character)=>{
          return(
            <div key={character.id} className="card">
              <img src={character.image} alt="Image" />
              <h1>{character.name}</h1>
              <Link to={`/character/${character.id}`} state={character}>View Profile</Link>
            </div>
          )
        })
      }
  </div> 
    </>
  )
}

export default Rick
