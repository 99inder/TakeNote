import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/index.js';
import { NoteItem, AddNote } from './index.js';

const Notes = () => {

    const dispatch = useDispatch();
    const { fetchNotes, updateNote } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, [])

    const notesState = useSelector((state) => state.notesReducer);

    //For Update Note
    const [note, setnote] = useState({ title: "", description: "", tag: "" });
    const ref = useRef(null);

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });
    }
    const handleClick = (e) => {
        e.preventDefault();
        updateNote(note);
        ref.current.click();
    }
    const editNote = (currentNote) => {
        ref.current.click();
        setnote(currentNote)
    }
    //Update Note code ends

    return (
        <>
            {/* < !--Button trigger modal-- > */}
            <button type="button" className="btn btn-primary" ref={ref} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            {/* <!--Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">*Title</label>
                                    <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">*Description</label>
                                    <textarea className="form-control" id="description" name='description' value={note.description} rows="3" onChange={onChange} required ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <AddNote />
            <div className="row">
                {
                    notesState.map((note) => {
                        return <NoteItem key={note._id} note={note} editNote={editNote} />
                    })
                }
            </div>
        </>
    )
}

export default Notes