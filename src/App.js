import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
// import About from './Components/about';
import Alert from './Components/Alert';
import React , {useState} from 'react'
// import {
//   BrowserRouter as Router, Routes, Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light')
  const [alert , setAlert] = useState(null)

  const showAlert = (msg , type) => {
    setAlert({
      msg : msg ,
      type : type
    })
    setTimeout(() => {setAlert(null)} , 3000)
  }
  const switchMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled" , "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled" , "success")
    }
  }
  return (
    <>
    <Navbar title = "Textutlis" head1 = "File" mode = {mode} switchMode = {switchMode}/>  
      <Alert alert={alert}></Alert>
      <div className="container my-3" >
        <TextForm label = "Enter Content to analyze" content = "Content" mode = {mode} showAlert = {showAlert}></TextForm>
      </div>
    {/* <Router>
      <Navbar title = "Textutlis" head1 = "File" mode = {mode} switchMode = {switchMode}/>
        <Alert alert={alert}></Alert>
      <div className="container my-3" >
      <Routes>
            <Route path="/about" element ={<About />} />
            <Route path="/" element = {<TextForm label = "Enter Content to analyze" content = "Content" mode = {mode} showAlert = {showAlert}></TextForm>}/>
      </Routes>
      </div>    
    </Router> */} 
    </>
  );
}

export default App;
