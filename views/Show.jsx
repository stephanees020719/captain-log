import React from "react"
 
export default function Show(props) {
    const {title, entry, shipIsBroken, createdAt} = props.log
  return (
    <div 
    style={{ 
    background: 'lightgray', 
    padding: '20px', 
    borderRadius: '10px', 
    }}>
        
        <h1 style={{ marginBottom: '10px' }}>
          {title}  </h1>
        
        <h3 style={{ marginBottom: '10px' }}>
        Log was created on: {`${createdAt}`} </h3>
         
        
        <h3 style={{ marginBottom: '10px' }}>
          Ship status: {shipIsBroken ? "Ship is broken"
           :
            "Ship is Ready to sail"}   </h3>
         
        
        <h3 style={{ marginBottom: '10px' }}>
          <u>Captain's Entry:</u> </h3>
       
        <p style={{ marginBottom: '10px' }}>
          {entry}</p>

        <a href="/logs" style={{ padding: '5px 10px', borderRadius: '5px', background: 'green', color: 'white'}}>
          Back to Captain logs</a>
    </div>
  )
}
