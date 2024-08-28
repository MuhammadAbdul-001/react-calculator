import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Input value={value} />
      <Buttons setValue={setValue} value={value} />
    </div>
  );
}

export default App;
