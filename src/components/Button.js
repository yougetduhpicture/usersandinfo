const Button = (props)=> {
    return(
    <div>
      <button onClick={(event) => props.handleClick(event, props.id)} value={props.id}>{props.text}</button>
    </div>
  )
  }
export default Button