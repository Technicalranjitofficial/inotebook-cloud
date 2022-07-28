import React from 'react'

const Message = (props) => {

    const capatilize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }

  
  return (
      <center><div className='align-items-center' style={{height: '45px'}}>

    {props.alert &&  <div className='container alert-dismissible fade show'>
      <div className={`alert alert-${props.alert.type}`} role="alert">
  {capatilize(props.alert.type)} ! {props.alert?props.alert.msg:"This is a message"}
</div>
    </div>}
      </div>
      </center>
  )
}

export default Message
