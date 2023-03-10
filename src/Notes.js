import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNote from "./AddNote";


function Notes({ note, noteAdded, currentNote, setCurrentNote }){
    const [currentNotes, setNotes] = useState([]);
    const navigate = useNavigate();

    const buttonClick = () =>{
        noteAdded();
        navigate("/note/edit");
    };

    return ( 
        
        <div>
            <div class = "notesContainer">
            <h3 class = "noteHead">Notes</h3>
            <button onClick = {buttonClick} class = "addNote">+</button>
            </div>
        {note.map((myNote) =>(
            <div class = "addedNote" onClick={() => setCurrentNote(myNote.id) }><h3 class = "noteHeader">{myNote.title}</h3><p class = "noteText">{myNote.noteText && myNote.noteText.substring(0, 50) + "..."}</p></div>
        ))}
        </div>
            
    )
};

export default Notes;