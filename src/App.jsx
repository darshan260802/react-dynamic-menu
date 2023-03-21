import { useState } from "react";
import "./App.css";
import List from "./Components/List";
import Select from "./Components/Select";

function App() {
  const [state, setState] = useState({
    nodeList: [],
    currentLevel: 0,
    currentParent: null,
  });

  const addNode = () => {
    const input = document.querySelector("#inp").value;
    if (!input) return;
    const newNode = {
      id: state.nodeList.length,
      level: state.currentLevel,
      parent: state.currentParent,
      value: input,
    };
    setState((prevState) => ({
      ...prevState,
      nodeList: [...prevState.nodeList, newNode],
    }));
  };

  return (
    <div className="main">
      <div className="left">
        <input type="text" name="inp" id="inp" />
        <button onClick={addNode}>Add</button>
        <Select parent={null} level={0} state={state} setState={setState} />
      </div>
      <div className="right">
        <List parent={null} level={0} state={state} />
      </div>
    </div>
  );
}

export default App;
