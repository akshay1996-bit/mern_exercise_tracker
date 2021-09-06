import React,{useState} from 'react';
import axios from 'axios';

const CreateUser = () => {
const [username,setUsername] = useState('')

const onChangeUsername = (e) =>{
        setUsername(e.target.value)
}

const onSubmit = (e) =>{
    e.preventDefault();

    const user = {
        username
    }
    console.log(user)
    axios.post('http://localhost:5000/users/add',user)
    .then(res => console.log(res.data))
    setUsername('')
}
    return ( <div>
        <div>
            <h4>Create a new User</h4>
            <form className="form-group" onSubmit={e=> onSubmit(e)}>
                <div className='form-group'>
                <label>UserName: </label>
                <input type='text'
                required
                value={username}
                onChange={e => onChangeUsername(e)}/>
            </div>
            <br/>
            <div className="form-group">
                <input type='submit' value='Create User' className="btn btn-primary"/>
            </div>
            </form>
        </div>
    </div> );
}
 
export default CreateUser;