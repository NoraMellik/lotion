import ReactQuill from 'react-quill';
import React, { useState, useRef } from "react";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";

function SavedNote({ checkDelete }){
    const [nowDate, setDate] = useState(new Date().toISOString().substring(0,19));
    const editorBox = useRef(null);
    const navigate = useNavigate();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };

    const editMode = () =>{
        navigate("/note/edit");
    }

    return (
        <div class = "typingSpace">
            <div class = "title"><label></label><input type = "text" placeholder='Untitled' class = "titleInput"></input><input type="datetime-local" class = "datePicker" 
            value = {nowDate} onChange = {(event)=> setDate(event.target.value)}/></div>
            <div class = "editor"><div class = "save"><button class = "buttonSave" onClick={editMode}>Edit</button><button onClick = {checkDelete}class = "buttonDelete">Delete</button></div><ReactQuill readOnly={true} 
            modules = {{toolbar: null}}ref={editorBox} style={{ height: '370px' }}></ReactQuill></div>
            </div>
    )
};


export default SavedNote;