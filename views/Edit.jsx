import React from 'react'
 
export default function Edit(props) {
  return (
    <div 
    style={{ background: 'lightgray', padding: '20px', borderRadius: '10px' }}>
        
    <h1 style={{ marginBottom: '10px' }}>
        Edit Captain's Log: {props.log.title}</h1>
        
    <form action={`/logs/${props.log._id}?_method=PUT`} method='POST'>
            <label style={{ display: 'block', marginBottom: '5px' }}>
                Title:</label>
            <input type="text" name="title" defaultValue={props.log.title} 
            style={{ marginBottom: '10px', padding: '5px', borderRadius: '5px', border: '1px solid lightgray' }} /> 
            <br />
            <label style={{ display: 'block', marginBottom: '5px' }}>
                Log Entry:</label>
            <textarea name="entry" defaultValue={props.log.entry} 
            style={{ marginBottom: '10px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }} /> 
            <br />
            <label style={{ display: 'block', marginBottom: '5px' }}>
                Ship Broken check :</label>
            {!props.log.shipIsBroken ?   <input type="checkbox" name="shipIsBroken" 
            style={{ marginBottom: '10px' }} /> : <input type="checkbox" name="shipIsBroken" defaultChecked style={{ marginBottom: '10px' }} />} 
            <br />
            <input type="submit" value=" Back to captain Log " style={{ padding: '5px 10px', borderRadius: '5px', background: 'green', color: 'white' }} />
       
        </form>
   
    </div>
  
  )

}
