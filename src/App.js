import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Notes from "./Notes";
import NoNote from "./NoNote";
import TextSpace from "./TextSpace";
import AddNote from "./AddNote";
import SavedNote from "./SavedNote";
import React, { useState } from "react";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";


function App() {
  const [note, setNote] = useState([]);
  const [userNote, setUserNote] = useState("");
  
  const [currentNote, setCurrentNote] = useState(false);
  // const noteAdded = () =>{
  //   const noteAdd = {id: uuid(), title: "Untitled", noteText: "."};
  //   setNote([noteAdd, ...note]);
  // };

  const checkDelete = (id) =>{
    const answer = window.confirm("Are you sure?");
    if (answer) {
      setNote(note.filter((myNote) => myNote.id !== id))
    }};

    const noteAdded = () => {
      setNote((event) => [
        ...event,
          {
            id: uuid(), 
            title: "Untitled",
            noteText: "."},

      ]);
      setUserNote("");
    };
  return(
    <BrowserRouter>  
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<><Notes note = {note} noteAdded = {noteAdded} currentNote = {currentNote} setCurrentNote = {setCurrentNote}/><NoNote/></>}>
        </Route>
        </Route>
        <Route path="/note/edit" element={<><Layout /> <Notes note = {note} noteAdded = {noteAdded}/><TextSpace checkDelete = {checkDelete} note = {note} setNote = {setNote}/></>}/>
        <Route path="/note" element={<><Layout /><Notes note = {note} noteAdded = {noteAdded}/> <SavedNote checkDelete = {checkDelete}/></>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
