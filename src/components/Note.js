import React,{useContext} from "react";
import AddNotes from "./AddNotes";
import Loader from "./Loader";
import Notes from "./Notes";
import NoteContext from "../context/notes/noteContext";


const Note = (props) => {
  const a= useContext(NoteContext);

  const {loader}=a;
  const { showAlert } = props;
  

  return (
    <>

      <AddNotes showAlert={showAlert} />

      <div className="container my-3">
        <h2>You Note:</h2>
        <Loader loader={loader}/>
        <Notes showAlert={showAlert} />
      </div>
    </>
  );
};

export default Note;
