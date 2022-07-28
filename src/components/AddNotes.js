import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import Loader from "./Loader";

const AddNotes = (props) => {
    const c = useContext(NoteContext);

    const { addNotes } = c;
  
    const [notes, setNotes] = useState({ title: "", description: "" });
  
  const onchange=(e)=>{
   
    setNotes({...notes,[e.target.name]:e.target.value})
  }


 
  const handleOnClick=(e)=>{
  
    e.preventDefault();
  
    const title=document.getElementById('title');
    const description=document.getElementById('description');
    if(title.value===''){
      return props.showAlert("Title should not be blank","info");
    }
    if(description.value===''){
      return props.showAlert("Description should not be blank","info");
    }
    addNotes(notes.title,notes.description);
 
    props.showAlert("Note Added","success")
    document.clearform.reset();
  }
  
  
  return (
    <div>
      <form className="container my-3" name="clearform">
        <h2>Add a Note:</h2>
        <div className="mb-3 my-3">
          <label htmlFor="title" className="form-label">
           Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Give a title"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
          Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            required
            onChange={onchange}
          ></textarea>
        </div>
       <button disabled={notes.title<5 || notes.description<5} type="submit" onClick={handleOnClick} className="btn btn-primary">
          Add
        </button>
        </form>
    </div>
  )
}

export default AddNotes
