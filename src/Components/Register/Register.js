import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
    
    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || '/home';

    const { setUser,setIsLoading,googleSignIn,setError, error} = useAuth();
    const [ email ,setEmail] = useState('');
    const [ password , setPassword] = useState('');
    const [ name , setName] = useState('');

    const emailChange = event =>{
        setEmail(event.target.value)
    }
    const PasswordChange = event =>{
        setPassword(event.target.value)
    }
    const nameChange = event =>{
        setName(event.target.value)
    }
    

    const setUserName = () =>{
      updateProfile(auth.currentUser , {
          displayName: name
      })
      .then((result)=>{

      })
    }
    const auth = getAuth();
    

    const createUser = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user)
          setUserName();
        })
        .catch((error) => {
           setError(error.message)
        });
        history.push('/home')
    }
    const handleGoogle = ()=>{
        googleSignIn()
        .then((result)=>{
            setUser(result.user)
            history.push(uri)
        })
        .finally(()=>setIsLoading(false))
    }
    
    return (
        <div>
            <h1 className="my-5 fw-bold fs-2">Create Account Here.</h1>
            <div>
            <form onSubmit={createUser}>
                <label className="mx-2" htmlFor="name">Name: </label>
                <input onBlur={nameChange} type="text" name="name" id="name" /> <br /> <br />
                <label className="mx-2" htmlFor="email">Email: </label>
                <input onBlur={emailChange} type="email" name="email" id="email" /> <br /> <br />
                <label  className="mx-2" htmlFor="password">PassWord: </label>
                <input onBlur={PasswordChange} type="password" name="password" id="password" /> <br /> <br /> 
                <h5 className='text-danger'>{error}</h5>
                
                <input type="submit" value="Register" /> <br /> <br />
            </form>
            </div>
            <div> 
            <p>Sign in With</p>
            <button onClick={handleGoogle} className="mx-2 btn btn-danger"><i class="fab fa-google">oogle Sign in</i></button>
                <p>-------------------------</p>
                <p>Already a user ? <Link to="/login">Login Now</Link></p>
            </div>
        </div>
    );
};

export default Register;