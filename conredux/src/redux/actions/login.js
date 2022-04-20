import { createAction } from "@reduxjs/toolkit";

export const CHECK_LOGIN='CHECK_LOGIN';
export const checkLogin=createAction(CHECK_LOGIN);
export const checkingAuth=createAction('CHECKING_AUTH');
export const completedAuth=createAction('COMPLETED_AUTH');
export const errorAuth=createAction('ERROR_AUTH');

export const sendingAuth=createAction("SENDIND_AUTH");
export const completeSendAuth=createAction("COMPLETE_SEND_AUTH");
export const errorSenduAuth=createAction('ERROR_SEND_AUTH');
export const checkIfUserisAuth=()=>(dispatch)=>{
    try{
        
        
    }
    catch(error){
        
    }

}
export const submitLogin=(username,password)=>(dispatch)=>{
    try{
        dispatch(completeSendAuth())
        const user={username,password};
        localStorage.setItem("user".JSON.stringify(user));
        dispatch(completeSendAuth());

    }
    catch(error){
        dispatch(errorSenduAuth(error));
    }
}