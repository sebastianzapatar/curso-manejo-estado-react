import { createAction } from "@reduxjs/toolkit";

export const CHECK_LOGIN='CHECK_LOGIN';
export const checkLogin=createAction(CHECK_LOGIN);
export const checkingAuth=createAction('CHECKING_AUTH');
export const completedAuth=createAction('COMPLETED_AUTH');
export const errorAuth=createAction('ERROR_AUTH');
export const checkIfUserisAuth=()=>(dispatch)=>{
    try{
        const isAuth=true;
        
    }
    catch(error){
        
    }

}