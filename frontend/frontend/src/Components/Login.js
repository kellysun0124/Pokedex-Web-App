import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();


    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if(err.email === "" && err.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if (res.data === "Success"){
                    navigate("/home")

                } else {
                    alert("no record exists")

                }
            })
            //.catch(errors => console.log(errors.response.data));
        }
    }


    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
    
                <form action="" onSubmit={handleSubmit}>           
                    
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input 
                            type="email" 
                            className='form-control rounded-0'
                            onChange={handleInput}
                            name="email"
                        />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input 
                            type="password" 
                            className='form-control rounded-0'
                            onChange={handleInput}
                            name="password"

                        />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className="btn btn-success w-100 rounded-0"><strong>Login</strong></button>
    
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Register here!</Link>    

                </form>
            </div>
        </div>
    )
}

export default Login

