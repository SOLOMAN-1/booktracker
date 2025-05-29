import React,{Children, createContext, use, useState} from"react";
export const BookContext=createContext();
export const BookProvider=({children})=>{
    
    const[book,setbook]=useState([]);
    const addbook=(book)=>{
        if(!book.title||!book.author){
            return;
        }
        setbook((prevBook)=>[...prevBook,book]);
        alert("Book added successfully");
    }
    const removebook=(title)=>{
        const remainigbook=book.filter((books)=>books.title!==title);
        setbook(remainigbook);
    }
    return (
        <BookContext.Provider value={{removebook,addbook,book,setbook}}>
        {children}
        </BookContext.Provider>
    )
}