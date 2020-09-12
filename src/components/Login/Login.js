import React from 'react'
import * as firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebaseConfig'
import { useState } from 'react'
import { useContext } from 'react'
import { contexUser } from '../../App'

firebase.initializeApp(firebaseConfig)

const Login = () => {

    const [SignInUser, setSignInUser] =useContext(contexUser)
 
    const provider = new firebase.auth.GoogleAuthProvider();

    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: '',
        isSignIn: false
    })

    const hadleSignInGoogle = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user
                const userData = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(userData)
                
                setSignInUser(userData)
            })
    }

    return (
        <React.Fragment>
            <div className='card col-md-5 mx-auto my-4 p-3'>
                <form>
                    <input type='text' className=' mt-2 form-control' placeholder='Enter Name'></input>
                    <input type='email' className=' mt-2 form-control' placeholder='Enter Email'></input>
                    <input type='password' className=' mt-2 form-control' placeholder='Enter Password'></input>
                    <input type='submit' className=' mt-2 btn btn-success d-block mx-auto' value='Submit'></input>
                </form>
                <button onClick={hadleSignInGoogle} className=' mt-2 btn btn-primary d-block mx-auto'>Sign in With Google</button>
            </div>
            {user.isSignIn&&
            <div classNames=' col-10 mx-auto'>
                <div className="col-md-6 lead">
                    <p>Name: {user.name}</p>
                    <p>Name: {user.email}</p>
                </div>
                <div className="col-md-6">
                    <img height='200' width='200' className='rounded rounded-circle shadow d-block mx-auto' src={user.photo} alt=''></img>
                </div>
            </div>}
        </React.Fragment>
    );
};

export default Login;