import React from "react";
import allnotes from "../notes";
import Note from "./Note";

function createNote(note){
    return(
        <Note 
            key={note.id}
            title={note.title}
            content = {note.content}
        />
    );
}
function Notes(){
    return(
        <div>
            {allnotes.map(createNote)}
        </div>
    );
}

export default Notes;