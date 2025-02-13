import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./NewNote";


function App() {
    const [allNotes, setAllNotes]=useState([])
    function addNote(note){
        setAllNotes(prevNotes => {
            return [
                ...prevNotes,
                 note
            ]
    }
)

    }
function deleteNote(id){
    setAllNotes(prevNotes => prevNotes.filter((note, index) => index !== id))
}
  return (
    <div>
      <Header />
      <CreateArea addAllNotes = {addNote} />
      {allNotes.map((note, index) => {
      return (<Note
                key={index}
                id={index} 
                title={note.title} 
                content={note.content} 
                toDelete={deleteNote} 
            />);
      })}
      <Footer />
    </div>
  );
}

export default App;
