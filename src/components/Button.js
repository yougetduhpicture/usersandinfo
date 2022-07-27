const Button = (props)=> {
    return(
    <div>
      <button onClick={() => props.handleClick(props.id)} value={props.id}>{props.text}</button>
    </div>
  )
  }
export default Button