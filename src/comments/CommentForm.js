import React, { useState } from 'react'

const CommentForm = () => {
  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <input 
      type="text" 
      placeholder="Write your comment here" 
      value={text}
      onChange={e=>setText(e.target.value)}
      
      />
      <input 
      id="checkbox" 
      type="checkbox" 
      defaultChecked={checked}
      onChange={()=>setChecked(!checked)}
      />
      <label htmlFor="checkbox">I agreed to the terms and conditions.</label>
      <button
        disabled={!text || !checked}
        onClick={()=>console.log(object)}
      >Comment</button>
    </div>
  )
}

export default CommentForm