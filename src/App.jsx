import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import Alert from './components/Alert';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom'


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const [color, setcolor] = useState('white');

  const showalert = (type, message) =>{
    setalert({
      typ: type,
      msg: message
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

function toggle(){
  if(mode === 'light' && color === 'white'){
    setmode('dark');
    setcolor('#002f5f');
    document.title = "TextUtils - Dark";
    document.body.style.backgroundColor = '#002f5f';
    showalert(`success`, `Dark mode has been enabled`);
  }

  else if(mode === 'dark' && color === '#002f5f'){
    setmode('light');
    setcolor('white');
    document.body.style.backgroundColor = 'white';
    showalert("success", `Light mode has been enabled`);
    document.title = "TextUtils";
  }
}

const changeColor = (event) => {

  if(color !== 'red' && event.target.id === 'r'){
    setcolor('red');
    setmode('dark');
    document.body.style.backgroundColor = 'red';
  }
  else if(color !== 'green' && event.target.id === 'g'){
    setcolor('green');
    setmode('dark');
    document.body.style.backgroundColor = 'green';
  }
  else if(color !== 'yellow' && event.target.id === 'y'){
    setcolor('yellow');
    setmode('dark');
    document.body.style.backgroundColor = 'yellow';
  }
  

  else if(color === 'red' && event.target.id === 'r'){
    setcolor('white');
    setmode('light');
    document.body.style.backgroundColor = 'white';
  }
  else if(color === 'green' && event.target.id === 'g'){
    setcolor('white');
    setmode('light');
    document.body.style.backgroundColor = 'white';
  }
  else if(color === 'yellow' && event.target.id === 'y'){
    setcolor('white');
    setmode('light');
    document.body.style.backgroundColor = 'white';
  }
}

  return (
    <>
    <Router>
    <Navbar tittle="TextUtils" about="About TextUtils" color={color} mode={mode} toggle={toggle} changeColor={changeColor}/>
    <Alert alert={alert} />

      <Routes>
        <Route exact path="/" element={<div className="container my-3">
          <TextArea text="Enter Text Here" mode={mode} color={color} showalert={showalert}/>
          </div>} />
        <Route exact path="/about" element={<About mode={mode} color={color}/>} />
      </Routes>

    </Router>
    </>
  )
}

export default App