import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import{Header} from './components/Header';
import {Form} from './components/Form';
import {Todo} from './todoApp/Todo';

function App() {

  const [name, setName] = useState('')

  const handleNameChange = (name) => {
    setName(name)
  }

  return (
    <>
      <Header name={name}></Header>
       <main className='container content'> 
       <Router>
       <Routes>
          <Route exact path='/' element={<Form onChange={handleNameChange}/>}/>
          <Route exact path='/todo' element={<Todo/>}/> 
       </Routes> 
       </Router>
      </main> 
      
    </>
  );
}

export default App;
