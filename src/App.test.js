import { logRoles, render, screen} from "@testing-library/react";
import App from "./App";

test('Test 1', () => {
 render(<App />)
 const rootElem = screen.getByTestId("rootdiv")
 logRoles(rootElem)
 const buttonElem = screen.getByRole("button", {name:"Test Button", exact:false} )
 
 expect(buttonElem).toBeInTheDocument()// This is called matcher
});
