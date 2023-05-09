import { screen, render, fireEvent } from "@testing-library/react";
import CommentForm from "../comments/CommentForm";
test("Initial test", ()=>{
    render(<CommentForm/>)
    const commentInput = screen.getByRole("textbox")
    expect(commentInput).toBeInTheDocument()
    const checkbox = screen.getByLabelText("I agreed to the terms and conditions.", {exact:false})
    expect(checkbox).toBeInTheDocument()
    const submitButton = screen.getByRole("button", {name:"Comment", exact:false})
    expect(submitButton).toBeDisabled()
})
test("Initial conditions", ()=>{
    render(<CommentForm/>)
    const checkbox = screen.getByLabelText("I agreed to the terms and conditions.", {exact:false})
    const commentInput = screen.getByPlaceholderText("write your comment here", {exact:false})
    const submitButton = screen.getByRole("button", {name:"Comment", exact:false})
    fireEvent.change(commentInput, {target: {value: 'a'}})
    fireEvent.click(checkbox)
    expect(submitButton).toBeEnabled()
})

