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
    }, [])

    const notesState = useSelector((state) => state.notesReducer);

    return (
        <>
            <AddNote />
            <div className='grid grid-cols-3 gap-8 grid-center'>
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