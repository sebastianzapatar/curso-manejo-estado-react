import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";


export const Login = () => {
  const state=useSelector((state)=>state.loginReducer);
  const dispatch=useDispatch();
  console.log(state);
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const handleuserName=(e)=>{
      const name=e.target.value;
      setUsername(name);
  }
  const handlepassword=(e)=>{
      const pass=e.target.value;
      setPassword(pass);
  }
  const enviar=(e)=>{
      e.preventDefault();
      
      if(username.length>2 && password.length>2){
          console.log('exito');
      }
      else{
          alert("Ingrese la logitud correcta");
      }
  }
  
  return (
    <form>
        <input type="text" value={username} name="username" id="username"
        onChange={handleuserName}/>
        <input type="password" value={password} name="password" id="password"
        onChange={handlepassword}/>
        <button onClick={enviar}>login</button>
    </form>
  )
}
