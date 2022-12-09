import React from 'react'

const Alert = (props) => {
    return (
        <div className="alert alert-primary" role="alert">
            Alert! {props.message}
        </div>
    )
}

export default Alert