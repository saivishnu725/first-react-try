import logo from "./logo.svg";
import "./App.css";

function Card(props) {
  return (
    <section>
      <center>
        <h1>{props.icon} First react page</h1>
        <p>{props.children} </p>
      </center>
    </section>
  );
}

function MyIcon() {
  return <i>❤️</i>;
}


function App() {
  return (
    <div>
      <Card icon={<MyIcon />}>
        <p>a small paragraph. write anything inside a Component and it can be accessed using the props.children</p>
      </Card>
      
      <Card>
      <img src={logo} alt="logo" height={"100px"} />
        <p>Second card</p>
      </Card>
    </div>
  );
}

export default App;
