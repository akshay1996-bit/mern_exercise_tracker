import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ExercisesList = () => {

const [exercises,setExercises] = useState([])

useEffect(()=>{
axios.get('http://localhost:5000/exercises/')
.then((response)=>{
    setExercises(response.data)
}).catch(err => console.log(err))
},[])
  
const deleteExe = (e) =>{
 
}

    return ( <div>
        
    </div> );
}
 
export default ExercisesList;