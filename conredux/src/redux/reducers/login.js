import { createReducer } from "@reduxjs/toolkit";

import { completedAuth, checkingAuth, errorAuth,
    sendingAuth, completeSendAuth, errorSenduAuth} from "../actions/login";
const initialState={
    isCheckingAuth:false,
    isAuth:false,
    isSendingAuth:false,
    isSuccededLogged:false,
    error:""
}
export default createReducer([initialState],(builder)=>{//Estado inicial del reducer
    builder.addCase(checkingAuth.toString(),(state,action)=>{
        return{...state,
            isCheckingAuth:true}
    }).addCase(completedAuth.toString(),(state,action)=>{
        return{...state,
            isAuth:action.isAuth,
            isCheckingAuth:false
        }
    }).addCase(errorAuth.toString(),(state,action)=>{
        return{...state,
            isAuth:false,
            isCheckingAuth:false,
            error:action.error
        }
    }).addCase(sendingAuth.toString(),(state,action)=>{
        return {...state,
        isSendingAuthForm:true}
    }).addCase(completeSendAuth.toString(),(state,action)=>{
        return{...state,
        isSendingAuth:false,
        isAuth:true,
        isSuccededLogged:true}
    }).addCase(errorSenduAuth.toString(),(state,action)=>{
        return{...state,
            isSendingAuth:false,
            isSuccededLogged:false,
            error:action.payload.error
        }
    })
    ;
});
