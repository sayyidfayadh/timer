import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";
function App() {
  const [time, setTime] = useState(0);
  const [working,setWorking]=useState(true);
  
  useEffect(()=>{
    if(working){
const timer= setInterval(()=>{
    setTime(pretime=>pretime+1)
  },1000) 
  return()=>clearInterval(timer)
    }
  },[working])
  
  function pause(){
    setWorking(a=>!a)
  }
  function reset(){
    setTime(0)
    setWorking(true)

  }

  return (
    <>
      <div className="timer">
        <div className="container">
          
          <h1 style={{fontSize:'500%'}}>{time}</h1>
          <div className="buttons">
          <Button variant="outlined" style={{marginRight:'10px',backgroundColor:'green',color:'white'}} on onClick={pause}>{working?"Pause":"Resume"}</Button>
            <Button variant="contained" style={{backgroundColor:'red'}} onClick={reset}>Reset</Button>
       
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
