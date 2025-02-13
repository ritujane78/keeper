import React from "react";


function Note(props){
    function deleteNote(){
        props.toDelete(props.id);
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNote}>Delete</button>
        </div>
    );
}
export default Note;