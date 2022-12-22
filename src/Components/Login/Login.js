import React, { useState } from 'react';
import { Link , useHistory, useLocation} from 'react-router-dom';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth.js';

const Login = () => {
    const {googleSignIn, setUser, setIsLoading, setError, error} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const emailChange = event =>{
        setEmail(event.target.value)
    }
    const PasswordChange = event =>{
        setPassword(event.target.value)
    }
    

   

    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || '/home';

    const handleGoogle = ()=>{
        googleSignIn()
        .then((result)=>{
            setUser(result.user)
            history.push(uri)
           
        }).catch((error=> setError(error.message)))
        .finally(()=>setIsLoading(false))
    }

    const signInEmail = () =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user)
          console.log(result.user)
          
        })
        .catch((error) => {
           setError(error.message)
        }).finally(()=>setIsLoading(false))
        history.push(uri)
    }
    return (
        <div className="login-form">
            <h2 className="my-5 fw-bold fs-2">Please Sign Into Your Account.</h2>
            <div >
                <form onSubmit={signInEmail}>
                    <label className="mx-1" htmlFor="email">Email: </label>
                    <input onBlur={emailChange}  type="email" name="email" id="email" />
                    <br /> <br />
                    <label className="mx-1" htmlFor="password">Password: </label>
                    <input onBlur={PasswordChange} type="password" name="password" id="password" /> <br /> <br />
                    <input type="submit" value="Sign in" />  <br /> <br />
                    <h5 className="text-danger"> {error} </h5>
                </form> 
                
            </div> 

            <div className="my-3">
            <p>Sign in With</p>
            <button onClick={handleGoogle} className="mx-2 btn btn-danger"><i class="fab fa-google">oogle Sign in</i></button>
            </div> 
             
             <div>
             <p>-------------------------</p>
             <p>New User ? <Link to='/register'>Create a Account</Link> </p>
              </div>
            
        </div>
    );
};

export default Login;