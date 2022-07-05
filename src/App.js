import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import './App.css';




//INFO CARD
const InfoCard = (props) => {
  return(

    <div>
      <h2>Name:     {props.data[0].name}</h2>
      <h3>Username: {props.data[0].username}</h3>
      <h3>Email:    {props.data[0].email}</h3>
      <h3>Phone:    {props.data[0].phone}</h3>
      <h3>Company:  {props.data[0].company.name}</h3>
      <h3>Website:  {props.data[0].website}</h3>
      <h3>Address: </h3>
      <ul>
        <li>{props.data[0].address.street}</li>
        <li>{props.data[0].address.suite}</li>
        <li>{props.data[0].address.city}</li>
        <li>{props.data[0].address.zipcode}</li>
      </ul>
     </div>
   )
 }


//BUTTON
const Button = (props)=> {
  return(
  <div>
    <button onClick={() => props.set(props.id)}>{props.text}</button>
  </div>
)
} 

//CARD

const Card = (props) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <h3>Contact: </h3>
      <p>E-mail: {props.email}</p>
      <p>Telephone: {props.phone}</p>

  </div>
  )
}
//CARDS
const Cards = (props) => {
  return(
    //with more time would use map...
<div>
    <Card name={props.data[0].name} email={props.data[0].email} phone={props.data[0].phone}/>
    <Button id={props.data[0].id} set={props.setId} text={'MORE INFO(demo)'}/>
    <Card name={props.data[1].name} email={props.data[1].email} phone={props.data[1].phone}/>
    
    <Card name={props.data[2].name} email={props.data[2].email} phone={props.data[2].phone}/>
    
    <Card name={props.data[3].name} email={props.data[3].email} phone={props.data[3].phone}/>
    
    <Card name={props.data[4].name} email={props.data[4].email} phone={props.data[4].phone}/>
    
    <Card name={props.data[5].name} email={props.data[5].email} phone={props.data[5].phone}/>
    
    <Card name={props.data[6].name} email={props.data[6].email} phone={props.data[6].phone}/>
    
    <Card name={props.data[7].name} email={props.data[7].email} phone={props.data[7].phone}/>
    
    <Card name={props.data[8].name} email={props.data[8].email} phone={props.data[8].phone}/>
    
    <Card name={props.data[9].name} email={props.data[9].email} phone={props.data[9].phone}/>


</div>
  )
}
//APP
const App = () => {

  //FETCHING THE DATA
  const [data, setData] = useState([])
  const [renderCards, setRenderCards] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [id, setId] = useState()
  const hook = () => {
    console.log('effect')
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
        setRenderCards(true)
      })
  }
  useEffect(hook, [])

  console.log('render', data.length, 'users')
  console.log(data)

//CLICK HANDLER
const handleClick = () =>{
 setShowInfo(true)
}

const handleClick2 = () =>{
  setShowInfo(false)
 }

  //APP RENDER
if(renderCards === true && showInfo === false){
  return(
    <div>
      <Cards data={data} setId={handleClick}/>
    </div>
    )
} else if (renderCards === true && showInfo === true){
  /**Didn't have the time to figure out how to get the id from button to here, 
   * but here's a demo of how the info would be displayed*/
  return(
  <div>
    <InfoCard data={data}/>
    <Button set={handleClick2} text={'BACK'}/>
  </div>
  )
} else {
  return(
<div>
  <p>Loading...</p>
</div>
  ) 
  }
}



export default App;

