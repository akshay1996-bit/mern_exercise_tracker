import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component.js';
import ExercisesList from './components/exerciseList.component.js';
import EditExercise from './components/editExercise.component.js';
import CreateExercise from './components/createExercise.component.js';
import CreateUser from './components/createUser.component.js';



function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br/>
      <Route exact path='/' component={ExercisesList}/>
      <Route path='/edit/:id' component={EditExercise}/>
      <Route path='/create' component={CreateExercise}/>
      <Route path='/user' component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
