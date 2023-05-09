import CommentForm from "./comments/CommentForm";
import CommentList from "./comments/CommentList";

function App() {
  const comments = [
    {
        id:1,
        comment:"First comment"
    },
    {
        id:2,
        comment:"Second comment"
    },
    {
        id:2,
        comment:"Third comment"
    },
    {
        id:4,
        comment:"Fourth comment"
    },
    {
        id:5,
        comment:"Fifth comment"
    },
    
]
  return (
    <div data-testid="rootdiv" >
     {/*<h1>Testing Basics</h1>
     <input type="text" placeholder="Input name here" />
     <button>Test Button</button>
     <ul>
      <li>item 1</li>
      <li>item 2</li>
     </ul>*/}
     <CommentForm/>
     <CommentList allowComments={comments} />
    </div>
  );
}

export default App;
