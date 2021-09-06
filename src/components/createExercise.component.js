import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = (props) => {
    const [username, setUsername] = useState()
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if(response.data.length > 0){
                response.data.map((item)=>{
                    users.push(item.username)
                    setUsername(response.data[0].username)
                })
                
            }
        })
        setUsers(['test user'])
        setUsername('test user')
    },[])

    const onChangeUserName = (e) =>{
      setUsername(e.target.value)
    }

    const onDesc = (e) =>{
        setDescription(e.target.value)
    }

    const onChangeDuration = (e) =>{
      setDuration(e.target.value)
    }

    const onChangeDate = (date) =>{
       setDate(date)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        const exercise = {
            username,
            description,
            duration,
            date
        }
        console.log(exercise)
        axios.post('https://localhost:5000/exercises/add',exercise)
        .then(res => console.log(res.data));
        window.location = '/';
    }
    return ( 
    
    <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <label>UserName</label>
            <select  required className="form-control"
            value={username}
            onChange={(e)=> onChangeUserName(e)}>
                {
                    users.map((user)=>{
                        return <option key={user}
                        value={user}>{user}
                            </option>

                    })
                }

            </select>

        </div>
        <div className="form-group">
          <label>Description: </label>  
          <input type="text" required
          className="form-control"
          value={description}
          onChange={e => onDesc(e)}/>
        </div>
        <div className="form-group">
          <label>Duration(in mins): </label>  
          <input type="text" required
          className="form-control"
          value={duration}
          onChange={e => onChangeDuration(e)}/>
        </div>
        <div className="form-group">
          <label>Date: </label>  
          <div>
              <DatePicker
              selected={date}
              onChange={date => onChangeDate(date)}/>
          </div>
          <br/>
          <div className="form-group">
             <input type="submit" value='Create exercise Log' 
             className="btn btn-primary"/>   
          </div>
        </div>
        </form>
    </div> );
}
 
export default CreateExercise;

