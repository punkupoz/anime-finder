import React from 'react';
import './DefaultTable.css';

function DefaultTable(props){
  return (
    <div id="info" className="info-box">
    <table>
      <caption>
        {props.entryName}
      </caption>
      <thead>
        {props.thead}
      </thead>
      <tbody>
      {props.data.map((item)=>{
          return (
            <tr key = {item.id}>
              <td>{item.col1}</td>
              <td>{item.col2}</td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
    </div>
  );
}


export default DefaultTable;