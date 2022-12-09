import React from 'react';
import { actionCreators } from "../redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const NoteItem = (props) => {
    const { note } = props;

    const dispatch = useDispatch();
    const { deleteNote } = bindActionCreators(actionCreators, dispatch);
    return (
        <div class="col-sm-6 my-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description}</p>
                    <div className="d-flex">
                        <button href="#" class="btn btn-primary mx-2" onClick={() => deleteNote(note._id)}><i className="fa-regular fa-trash-can"></i>Delete</button>
                        <button href="#" class="btn btn-primary mx-2"><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;