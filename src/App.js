import "./App.css";
// import Home from './components/Home';
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Note from "./components/Note";
import NoteState from "./context/notes/noteState";
import Message from "./components/message";


import { useState } from "react";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Footerdiv from "./components/Footerdiv";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  return (
    <>
      <NavBar />

      <NoteState>
        <div className="container mt-3 vh">
          <Message alert={alert} />
        </div>
        <div className="container d-large">
          <Routes>
          <Route path="/note" element={<Note showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route path="/" element={<Note showAlert={showAlert} />} />
          </Routes>
        </div>
      </NoteState>
<Footerdiv/>
    </>
  );
}

export default App;
