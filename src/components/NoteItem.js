import React,{useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import View from "./Modal/View";

const NoteItem = (props) => {
  const { note, updateNotes, deletingNote } = props;
 


  return (
    <>
    
      <div className="col-md-4 mb-3">
        <div className="card h-100 ml-1">
          <img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description.substring(0,100)}...
            </p>
          </div>
            <div className="mb-2 ml-2">
            <button type="button" onClick={()=>{
              props.handleOnReadMore(note)
            }} className="btn btn-danger btn-sm">Read More</button>
            </div>
          <div className="card-footer">
            <small className="text-muted">Created : {note.date}</small>
            <div className="float-right">

            <i className="hidden mr-2" onClick={() => {
              deletingNote(note);
            }}><FontAwesomeIcon icon={faTrash} /></i>
            <i className="hidden ml-2" onClick={() => {
              updateNotes(note);
            }}><FontAwesomeIcon icon={faEdit} /></i>

            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default NoteItem;
