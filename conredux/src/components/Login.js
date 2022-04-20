import { useEffect, useState } from "react";
import { shallowEqual, useDispatch,useSelector } from "react-redux";
import { isAuthSel, isCheckingAuthSel } from "../redux/reducers/selectors";
import {submitLogin} from "../redux/actions/login";
export const Login = () => {
  const isAuth=useSelector(isAuthSel,shallowEqual);//Para evitar rerrenderización
  const isCheckingAuth=useSelector( isCheckingAuthSel,shallowEqual);//Para evitar rerrenderización
  const dispatch=useDispatch();
  console.log(isCheckingAuth,isAuth);
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
          dispatch(submitLogin(username,password));
      }
      else{
          alert("Ingrese la logitud correcta");
      }
  }
  useEffect(()=>{
        if(isAuth){
            console.log("logueado");
        }
        else{
            console.log("No logging");
        }
  },[])
  useEffect(()=>{
    if(isAuth){
        alert("logueado");
    }
    else{
        console.log("No logging");
    }
  },[isAuth])
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
