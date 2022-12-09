import React from 'react'

const Signup = () => {
    return (

        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" autoComplete='name' required/>
                    <div id="nameHelp" className="form-text">We'll never share your personal details with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" autoComplete='email' required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" autoComplete="new-password" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="reEnterPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="reEnterPassword" autoComplete="new-password" required/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>

    )
}

export default Signup