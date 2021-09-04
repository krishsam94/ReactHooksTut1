import "./styles.css";
import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1
        onClick={() => {
          setCount(++count);
        }}
      >
        Hello {count}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
