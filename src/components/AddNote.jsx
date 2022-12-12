import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

const AddNote = () => {
    const { authToken } = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    const { addNote } = bindActionCreators(actionCreators, dispatch);
    const [note, setnote] = useState({ title: "", description: "", tag: "" });

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });
    }

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note, authToken);
        setnote({ title: "", description: "", tag: "" });
    }
    return (
        <div className='my-3'>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">*Title</label>
                <input type="text" className="form-control" id="title" name='title' value={note.title} minLength={3} onChange={onChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">*Description</label>
                <textarea className="form-control" id="description" name='description' value={note.description} rows="3" minLength={5} onChange={onChange} required ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
            </div>
            <button type="button" className="btn btn-primary" disabled={note.title.length < 3 || note.description.length < 5} onClick={handleClick}>Add Note</button>
        </div>
    )
}

export default AddNote;