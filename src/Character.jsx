import { useLocation } from "react-router-dom";

const Character = ()=>{
    const character = useLocation().state
    console.log(character)
    return(
        <div>
            <div>
                <img src={character.image} />
            </div>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.location.name}</p>
           <div>
                 {
                     character.episode.map((epi)=>{
                         return (
                            <div>
                            {epi}
                           </div>
                        )
                 })
                 }
          </div>
        </div>
    )
}
export default Character