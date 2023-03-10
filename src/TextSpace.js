import ReactQuill from 'react-quill';
import React, { useState, useRef } from "react";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";

function TextSpace({ checkDelete, note }){
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

    const savedMode = () =>{
        navigate("/note");
    };


    return (
        <div class = "typingSpace">
            <div class = "title"><label></label><input type = "text" placeholder='Untitled' class = "titleInput"></input><input type="datetime-local" class = "datePicker" 
            value = {nowDate} onChange = {(event)=> setDate(event.target.value)}/></div>
            <div class = "editor"><div class = "save"><button class = "buttonSave" onClick={savedMode}>Save</button><button onClick = {checkDelete}class = "buttonDelete">Delete</button></div><ReactQuill ref={editorBox} style={{ height: '370px' }} placeholder='Your Note Here'></ReactQuill></div>
            </div>
    )
};


export default TextSpace;