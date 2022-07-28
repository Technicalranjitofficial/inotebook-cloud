import React, { useContext, useEffect,useState,useRef } from "react";
import NoteContext from "../context/notes/noteContext";
import View from "./Modal/View";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const a = useContext(NoteContext);
  const history=useNavigate();
  // const b=useContext(NoteContext);

  const { notes, getNotes,editNotes,deleteNote } = a;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else{
      history('/login');
    }
    // eslint-disable-next-line 
  }, [])



   
      const ref=useRef(null);
      const refClose=useRef(null);
      const refcancel=useRef(null);
      const deleteRef=useRef(null);
      const viewref=useRef(null);

  const [note, setNote] = useState({id: "", title: "", description: ""})
  const [Vn,setVn] = useState({id: "", title: "", description: ""})

  let currentId="";
  const updateNotes = (currentNote) => {
    
      ref.current.click();
      setNote({id: currentNote._id, title: currentNote.title, description: currentNote.description})
  } 
  const deletingNote = (note) => {
    currentId=note._id;
      deleteRef.current.click();
   
  }

  const handleonClick = (e)=>{ 
      editNotes(note.id, note.title, note.description)
      refClose.current.click();
  }

  const onchange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }

  const handledelete=()=>{
    
    try {
      deleteNote(currentId);

    } catch (error) {
  console.log(error)
    }
     
   
    refcancel.current.click();
    props.showAlert("Note deleted Sucessfully","success");
    
  }
 

  const handleOnReadMore=(note)=>{

    setVn({id:note.id,title:note.title,description:note.description});

   
    viewref.current.click();

  }

  
  return (
    <>

      <button type="button" className="btn btn-primary d-none" ref={ref} data-toggle="modal" data-target="#exampleModalCenter">
        Edit Notes
      </button>

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Updating Notes:</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="container my-3">
                <h2>Update A Note :</h2>
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
                    value={note.title}
                    onChange={onchange}
                    required
                    minLength={5}
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
                    value={note.description}
                    onChange={onchange}
                    required
                    minLength={5}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" disabled={note.title<5 || note.description<5}  onClick={handleonClick} className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal deleting the notes */}


<button type="button" ref={deleteRef} className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
  Delete
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Confirm</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Are you sure want to delete the note?
      </div>
      <div className="modal-footer">
        <button type="button" ref={refcancel} className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" onClick={handledelete} className="btn btn-primary">Yes</button>
      </div>
    </div>
  </div>
</div>


      {/* ending modal */}
      <View viewref={viewref} Vn={Vn}/>

      <div className="row" style={{marginBottom:"20vh"}}>
        {notes.length>0?notes.map((note) => {
          return <NoteItem updateNotes={updateNotes} deletingNote={deletingNote} key={note._id} note={note} handleOnReadMore={handleOnReadMore} />;
        }):<p>Dear User,You don't have any notes</p>}
      </div>
    </>


  );
};

export default Notes;
