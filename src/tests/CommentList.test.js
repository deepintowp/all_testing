import { screen, render, fireEvent } from "@testing-library/react";
import CommentList from "../comments/CommentList";

test("When Comments are not avaliable.", ()=>{
    render(<CommentList allowComments={[]} />)
    const noCommentFoundElem = screen.getByText("No comments found")
    expect(noCommentFoundElem).toBeInTheDocument()

})

test("List all comments", ()=>{
    render(<CommentList allowComments={[
        {
            id:1,
            comment:"First comment"
        },
        {
            id:2,
            comment:"Second comment"
        }
        
    ]} />)
    const noCommentFoundElem = screen.queryByText("No comments found", {exact:false})
    expect(noCommentFoundElem).not.toBeInTheDocument()
    const commentList = screen.getAllByRole("listitem")
    expect(commentList.length).toBe(2)

})

