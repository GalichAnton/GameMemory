import Game from "./components/Game/Game";
import {useState} from "react";


function App() {
 const [started, setStarted] = useState(false)
  return (
    <div className="App" >
      {started ? <Game/>  : <button className='btn' onClick={()=>setStarted(true)}>Start Game!</button>}

    </div>
  );
}

export default App;
