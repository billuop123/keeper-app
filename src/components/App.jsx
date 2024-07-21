import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {

  const [notes,setNotes]=useState([]);
  function addNote(note){
    setNotes((prevNote)=>{
      return(
        [...prevNote,note]
      )
    })
  }
  function deleteNote(id){
    setNotes(()=>{
      return(notes.filter((noteItem,index)=>{
        return (index!=id)}))})}


  
  return (
    <div>
      <Header />
      {notes.map((noteItem,index)=>{
        return(
          <Note key={index} id={index} title={noteItem.title} onDelete={deleteNote} content={noteItem.content}/>
          
             )
      })}
      <CreateArea onAdd={addNote}/>
      <Footer />
    </div>
  );
}

export default App;
