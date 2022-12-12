import React from 'react';
import { actionCreators } from "../redux"
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const NoteItem = (props) => {
    const { note, editNote } = props;

    const { authToken } = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    const { deleteNote } = bindActionCreators(actionCreators, dispatch);
    return (
        <div className="col-sm-6 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="d-flex">
                        <button className="btn btn-danger mx-2" onClick={() => deleteNote(note._id, authToken)}><i className="fa-regular fa-trash-can"></i>Delete</button>
                        <button className="btn btn-primary mx-2" onClick={() => editNote(note)}><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;