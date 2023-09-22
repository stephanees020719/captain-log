
import React from "react";

export default function Index(props) {
  const logs = props.logs;
  return (
    <div 
    style={{ background: 'lightgray', 
    padding: '20px', 
    borderRadius: '10px' 
    }}>
      <h1 style={{ marginBottom: '10px' }}>
        Captain's Log</h1>
      <a href="/logs/new" 
      style={{ padding: '5px 10px', 
      borderRadius: '5px', background: 'green', 
      color: 'white', marginBottom: '10px' }}>
        Create new captain log</a>
      
      <ul>
        {logs.map((log, i) => {
          return (
            <li key={i} style={{ marginBottom: '10px' }}>
              {log.title} <a href={`/logs/${log._id}`} style={{ padding: '5px 10px', borderRadius: '5px', background: 'green', color: 'white' }}>
                View Captain Log</a> {" "}
              
              <a href={`/logs/${log._id}/edit`} style={{ padding: '5px 10px', borderRadius: '5px', background: 'green', color: 'white' }}>
                Edit Captain Log</a> <br /> <br /> {" "}
              
              <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`DELETE ${log.title}`} style={{ padding: '5px 10px', borderRadius: '5px', background: 'red', color: 'white' }} /> 
              
              </form>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

