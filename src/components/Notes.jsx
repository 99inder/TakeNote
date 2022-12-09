import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/index.js';
import { NoteItem, AddNote } from './index.js';

const Notes = () => {

    const dispatch = useDispatch();
    const {fetchNotes} = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, [])

    const notesState = useSelector((state) => state.notesReducer);

    return (
        <>
            <AddNote />
            <div class="row">
                {
                    notesState.map((note) => {
                        return <NoteItem key={note._id} note={note} />
                    })
                }
            </div>
        </>
    )
}

export default Notes