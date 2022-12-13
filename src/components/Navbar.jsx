import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { actionCreators } from "../redux"

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(actionCreators.logout());
        navigate('/login');
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand text-light">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link to='/' className="nav-link active text-light" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link text-light" href="#">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('authToken') ?
                        <div>
                            <Link to="/login" className="btn btn-primary mx-2" role="button">Login</Link>
                            <Link to="/signup" className="btn btn-success mx-2" role="button">Signup</Link>
                        </div>
                        : <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar