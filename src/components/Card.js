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
  export default Card