import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "./BookContext";
import { useBookHook, useLogHook } from "./CustonHook";

const AddBookForm=()=>{
    const{addbook,removebook,book}=useBookHook();
    const{loginfo,logerror}=useLogHook();
    useEffect(()=>{
        const addbooks=()=>{
            addbook({title:'alchemist',author:'soloman'});
        }
        addbooks();
    },[])
    const HandleNewBook=(title,author)=>{

        addbook({title,author});
        loginfo(`Added book title is ${title} and author is ${author}`);
    }
    const HandleRemoveBook=(title)=>{

        removebook(title);
        loginfo(`Removed book title is ${title}`);
    }
    const [newbook,setNewBook]=useState({
        title:'',
        author:''
    });
    const handleBookSubmit=(e)=>{
        e.preventDefault();
        if(newbook.author==""||newbook.title==""){
            logerror("please provide the correct details");
            return;
        }
        else{
            HandleNewBook(newbook.title,newbook.author);
            setNewBook({title:'',author:''});

        }
    }
    const handleChange =(e)=>{
        e.preventDefault();
        const{name,value}=e.target;
        setNewBook({...newbook,[name]:value})
    }
    return(
    <div>
        <form onSubmit={handleBookSubmit}>
            <label htmlFor="title">Enter the title of the book</label><br></br>
            <input type="text" id="title" name="title" value={newbook.title} onChange={handleChange}></input>
            <br></br>
            <label htmlFor="author">Enter the name of author</label><br></br>
            <input type="text" id="author" name="author" value={newbook.author} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
        {book.length>0 &&<h1><center><u>Entered Books</u></center></h1> 
            }
            <ul>
                {book.map((book,idx)=>(
                    <li key={idx}><strong>{book.title}</strong> by {book.author}
                    <button onClick={()=>HandleRemoveBook(book.title)}>Remove</button></li>
                    
                ))}
            </ul>
    </div>
    )
}


export const BookList=()=>{
    const {book}=useBookHook();
    
    console.log(book);
    return(
        <div>
            <AddBookForm></AddBookForm>
            
            
        </div>
    )
}
