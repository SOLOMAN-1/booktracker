import React,{Children, createContext} from "react";
export const LoggerContext=createContext();
export const LoggerProvider =({children})=>{
    const loginfo=(message)=>{
        console.info(message);
    }
    const logerror=(message)=>{
        console.log(message)
    }
    return(
        <LoggerContext.Provider value={{loginfo,logerror}}>
            {children}
        </LoggerContext.Provider>
    )
}