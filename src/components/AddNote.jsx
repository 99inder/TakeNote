import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

const AddNote = () => {
    const dispatch = useDispatch();
    const { addNote } = bindActionCreators(actionCreators, dispatch);
    const [note, setnote] = useState({ title: "", description: "", tag: "" });

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });
    }

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note);
    }
    return (
        <div className='my-3'>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">*Title</label>
                <input type="text" className="form-control" id="title" name='title' onChange={onChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">*Description</label>
                <textarea className="form-control" id="description" name='description' rows="3" onChange={onChange} required ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </div>
    )
}

export default AddNote;