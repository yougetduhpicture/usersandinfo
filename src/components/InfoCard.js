const InfoCard = (props) => {
    return(   
              <div>
                <h2>Name:     {props.data[props.chosenPerson].name}</h2>
                <h3>Username: {props.data[props.chosenPerson].username}</h3>
                <h3>Email:    {props.data[props.chosenPerson].email}</h3>
                <h3>Phone:    {props.data[props.chosenPerson].phone}</h3>
                <h3>Company:  {props.data[props.chosenPerson].company.name}</h3>
                <h3>Website:  {props.data[props.chosenPerson].website}</h3>
                <h3>Address: </h3>
                <ul>
                  <li>{props.data[props.chosenPerson].address.street}</li>
                  <li>{props.data[props.chosenPerson].address.suite}</li>
                  <li>{props.data[props.chosenPerson].address.city}</li>
                  <li>{props.data[props.chosenPerson].address.zipcode}</li>
                </ul>
               </div>
      
    )
}
export default InfoCard