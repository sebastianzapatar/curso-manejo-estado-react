import { createReducer } from "@reduxjs/toolkit";

import { completedAuth, checkingAuth, errorAuth } from "../actions/login";
export default createReducer([],(builder)=>{//Estado inicial del reducer
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
    });
});
