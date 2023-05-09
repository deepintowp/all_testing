import React from 'react'

const CommentList = ({allowComments}) => {
    if(allowComments.length === 0 ){
        return <h6>No comments found</h6>
    }
  return (
    
    <div>
        <ul>
            {
                allowComments.map(item=>{
                    return <li key={item.id}>{item.comment}</li>
                })
            }
        </ul>
    </div>
  )
}

export default CommentList