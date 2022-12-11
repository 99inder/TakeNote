import React, { useState } from 'react'
import { actionCreators } from '../redux';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

const Signup = () => {
    const dispatch = useDispatch();
    const { signup } = bindActionCreators(actionCreators, dispatch);

    const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
    const onChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
    const handleClick = (e) => {
        e.preventDefault();
        signup(newUser);
    }
    return (
        <form onSubmit={handleClick}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' value={newUser.name} onChange={onChange} aria-describedby="nameHelp" autoComplete='name' required />
                <div id="nameHelp" className="form-text">We'll never share your personal details with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' value={newUser.email} onChange={onChange} aria-describedby="emailHelp" autoComplete='email' required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' value={newUser.password} onChange={onChange} autoComplete="new-password" required />
            </div>
            {/* <div className="mb-3">
                <label htmlFor="reEnterPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="reEnterPassword" autoComplete="new-password" required />
            </div> */}
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>

    )
}

export default Signup