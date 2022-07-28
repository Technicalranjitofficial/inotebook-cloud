import React from 'react'

const Message2 = (props) => {
  return (
    <div style={{height:"1vh"}}>
      {props.message2 && <p style={{color:"red",fontWeight:'bold'}}>Error : {props.message2}</p>}
    </div>
  )
}

export default Message2
