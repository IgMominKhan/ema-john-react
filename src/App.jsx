import { useState } from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Shop />
    </div>
  );
}

export default App;
