import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [note,setNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevContent => {
            return {...prevContent,
                [name]: value
            }
        })
    }
    function handleClick(event){
        event.preventDefault();
        props.addAllNotes(note);
        setNote({
            title:"",
            content:""
        });
    }
  return (
    <div>
      <form className="create-note">
      <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
