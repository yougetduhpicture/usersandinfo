import Button from './Button'
import Card from './Card'

const People = (props) => {
    return(
      props.data.map(person => {
        return (
          <div key={person.id}>
             <Card name={person.name} email={person.email} phone={person.phone}/>
              <Button id={person.id} handleClick={props.handleClick} text={'MORE INFO'}/>
          </div> 
        )
      })
    )
  }
  export default People 