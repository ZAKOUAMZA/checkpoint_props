import React from 'react'
import Joueur from './Joueur';
import joueurs from './Joueurs';
export default function Joueurliste() {
    const mystyle={
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "space-between"
    }
    return (
        <div style={mystyle}>
    {joueurs.map((el)=>(
        <Joueur key={el.name} {...el}/>    
                        ))
    }
        </div>
        
            )
}
