import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'

import InfoCard from './components/InfoCard'
import Button from './components/Button'
import People from './components/People'

//APP
const App = () => {
  const [data, setData] = useState([])

  const [renderCards, setRenderCards] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [chosenPerson, setChosenPerson] = useState('')

//FETCHING THE DATA
  const hook = () => {
 
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data)
        setRenderCards(true)
      })
  }
  useEffect(hook, [])

//CLICK HANDLER
const handleClick = (id) =>{
  setChosenPerson(id - 1)
  setShowInfo(true)
}
//2nd CLICK HANDLER
const handleClick2 = () =>{
  setShowInfo(false)
 }

//APP RENDER
if (renderCards === true && showInfo === false){
  return(
    <div className='flex-container'>
      <People data={data} handleClick={handleClick} setChosenPerson={setChosenPerson}/>
    </div>
    )
} else if (renderCards === true && showInfo === true){
    return(
      <div>
        <InfoCard data={data} chosenPerson={chosenPerson}/>
        <Button handleClick={handleClick2} text={'BACK'}/>
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