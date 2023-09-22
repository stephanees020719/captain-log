// Create the view, it should contain a form with the following:
// formwith action="/logs"and method="POST"
// inputtype text for a title
// inputtype textarea for an entry
// inputtype checkbox for shipIsBroken
// inputtype submit
import React from 'react'
 
export default function New() {
  return (
    <div style={{ 
    background: 'lightgray', 
    padding: '20px', 
    borderRadius: '10px'}}>

    <form action="/logs" method="POST">
            <h2 style={{ marginBottom: '10px' }}>
              Create New Log</h2>
            
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Title:</label>
            <input type="text" name="title" 
            style={{ marginBottom: '10px', 
            padding: '5px', borderRadius: '5px', 
            border: '1px solid lightgray' }} />
             <br />
            
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Log Entry:</label>
            <textarea name="entry"
            style={{ marginBottom: '10px', 
            padding: '5px', 
            borderRadius: '5px', 
            border: '1px solid lightgray' }} /> 
            <br />
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Ship Broken check:</label>
            <input type="checkbox" name="shipIsBroken" style={{ marginBottom: '10px' }} /> <br />
            <input type="submit" value="Back to Captain Log" 
            style={{ padding: '5px 10px', borderRadius: '5px', 
            background: 'green', color: 'white'
            }} />
        
        </form>
    </div>
  )
}
 