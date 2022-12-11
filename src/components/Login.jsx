import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

const Login = () => {

    const dispatch = useDispatch();
    const { login } = bindActionCreators(actionCreators, dispatch);

    const [credentials, setcredentials] = useState({ email: "", password: "" });

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleClick = (e) => {
        e.preventDefault();
        login(credentials);
    }
    return (

        <form onSubmit={handleClick}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" value={credentials.email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" autoComplete='email' />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" value={credentials.password} onChange={onChange} className="form-control" id="password" autoComplete='off' />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    )
}

export default Login