const Button = (props)=> {

    return(
    <div>
      <button className='Button' 
      onClick={() => props.handleClick(props.id)} value={props.id}>{props.text}</button>
    </div>
  )
  }
export default Button