
import './App.css';
import { useState } from "react";

function App() {

  const [color, setColor] = useState(" ");

  return (
    <>

      <div className='container' style={{ marginTop: "10%", marginLeft: "30%" }}><h1>Rainbow colors:{color}</h1>
        <div className="container">
          <button type="button" style={{ backgroundColor: "violet", color: "white", padding: "10px", marginRight: "10px" }} onClick={() => setColor(" first color is violet")}>First</button>

          <button type="button" style={{ backgroundColor: "indigo", color: "white", padding: "10px", marginRight: "10px" }} onClick={() => setColor(" second color is indigo")}>Second</button>

          <button type="button" style={{ backgroundColor: "blue", color: "white", padding: "10px", marginRight: "10px" }} onClick={() => setColor(" third color is blue")}>Third</button>

          <button type="button" style={{ backgroundColor: "green", color: "white", padding: "10px", marginRight: "10px" }} onClick={() => setColor(" forth color is green")}>Forth</button>

          <button type="button" style={{ backgroundColor: "yellow", color: "white", padding: "10px", marginRight: "10px" }} onClick={() => setColor(" fifth color is yellow")}>Fifth</button>

          <button type="button" style={{ backgroundColor: "orange", color: "white", padding: "10px", marginRight: "10px" }} onClick={() => setColor(" sixth color is orange")}>Sixth</button>

          <button type="button" style={{ backgroundColor: "red", color: "white", padding: "10px", marginRight: "10px" }} onClick={() => setColor(" seventh color is red")}>Seventh</button>

          <button type="button" style={{ padding: "10px", marginRight: "10px" }} onClick={() => setColor(" ")}>Reset</button><br></br>
        </div>
      </div>
    </>
  )

}
export default App;


