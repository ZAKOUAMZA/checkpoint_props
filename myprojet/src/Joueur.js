import React from 'react'
import Card from 'react-bootstrap/Card';
export default function Joueur({ name, equipe, nationnalite, numero, age, image }) {
  
  return (
   
    <div style={{padding:"20px"}}>
         <Card   style= {{width: '18rem',background:"orange",boxShadow:"-2px -2px 10px 7px #ebb971f7"}}>
        <Card.Header style={{background:"green",color:"white",fontSize:"1.5em"}}>{name}</Card.Header>
        <Card.Body>
        <img  style={{ width: '15rem' }} src={image}/>
        <Card style={{background:"green",color:"white",padding:"20px",fontSize:"1.5em"}}>
        <Card.Title>{equipe}</Card.Title>
          <Card.Text >{nationnalite}</Card.Text>
          <Card.Text>{numero}</Card.Text>
          <Card.Text>{age}</Card.Text>
        </Card>
        </Card.Body>
      </Card>
        
    </div>
  )
}
Joueur.defaultProps = {
  name: ' Erling Braut Haaland',
  equipe: 'Manchester City',
  nationnalite: 'Anglais',
  numero: '09',
  age: '23 ans',
  image: 'https://files.seodev.at/ceros-fr/mbappe-vs-haaland-fr/media/0fd818b6c2f9bf6eb7554f30d432a023/4-half.png'
};