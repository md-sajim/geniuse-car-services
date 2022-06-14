import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const hendleForm = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(name,email,password)
    }
    return (
        <div className='signup-form'>
            <h1>Please SignUp</h1>
            <form onSubmit={hendleForm}>
                <input type="text" name="name" placeholder='Your Name' id="" required />
                <input type="email" name="email" placeholder='Email Add' id="" required />
                <input type="password" name="password" placeholder='Password' id="" required />
                <input type="submit" value="SignUp" />
            </form>
            <p>Already SignUp Ginius Car?<Link to={"/login"} className="text-warning text-decoration-none pe-auto">Please Login</Link></p>
        </div>
    );
};

export default SignUp;