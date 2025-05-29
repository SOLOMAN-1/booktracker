import React, { useContext } from "react";
import { BookContext } from "./BookContext";
import { LoggerContext } from "./LoggerContext";
export const useBookHook=()=>{
    const{addbook,removebook,book}=useContext(BookContext);
    return {addbook,removebook,book};
}
export const useLogHook=()=>{
    const{loginfo,logerror}=useContext(LoggerContext);
    return {loginfo,logerror};
}