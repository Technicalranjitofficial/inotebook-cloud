import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const host = "https://inotebakend.herokuapp.com";

  

  const initialNotes = []
  
  const [loader, setLoader] = useState(null);




  const [notes, setNotes] = useState(initialNotes);


  const addNotes = async (title, description) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

      body: JSON.stringify({ title, description })
    });
    const note= await response.json();
 


    
    if(!title && !description){
      return console.log("You have to add first");
    }
    setNotes(notes.concat(note));
  }

  const getNotes = async () => {

    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

    });
    const json = await response.json();
    console.log(json)
    setNotes(json)
    setLoader("d-none");
  }

  //deleting the note

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

    });
    const json = await response.json();
    console.log(json)

    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote);
  }



  // Edit a Note
  const editNotes = async (id, title, description) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/noteupdate/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description })
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNotes, deleteNote, getNotes, editNotes,loader }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
