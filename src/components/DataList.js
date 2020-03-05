import React from 'react'


const DataList = props =>(
  <ul>
      {
          props.items.map((item, index)=> <li key = {index}>{item}</li>)          
      }
 
   
    </ul>

)

export default DataList