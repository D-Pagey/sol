import sol from "/sol.jpg";
import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <div>
      <img src={sol} className="logo" alt="Sol" />
      <h1>Sol</h1>
      <p>The component library for those that can't finish their drinks</p>
      <Button label="Button" primary />
    </div>
  );
}

export default App;
