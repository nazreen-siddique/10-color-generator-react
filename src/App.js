import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const[error,setError]=useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [color,setColor] = useState("")
 const handleSubmit = (e)=>{
e.preventDefault();
try {
  let colors = new Values(color).all(10)
  setList(colors)
  setError(false)
  console.log(colors);
} catch (error) {
  setError(true)
}
 }
  return <>
  <section className='container'>
    <h3>color generator</h3>
     <form onSubmit={handleSubmit}> 
      <input type="text" className={` ${error ? "error" : null}`} 
      placeholder="#f15025"
      value={color}
      onChange={(e)=>{setColor(e.target.value)}} />
      <button type='submit' className='btn'>submit</button>
     </form>
    </section>
    <section className="colors">
  {list.map((color,index)=>{
    return(
    <SingleColor index={index} {...color} hexColor={color.hex} />
    )
  })}
    </section>
    
      </>
}

export default App
