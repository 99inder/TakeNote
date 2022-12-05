import { useSelector } from 'react-redux'
import NoteItem from './NoteItem';

const Notes = () => {
    const notesState = useSelector((state) => state.notesReducer);
    return (
        <div className='grid grid-cols-3 gap-8 grid-center'>
            {
                notesState.map((note) => {
                    return <NoteItem key={note._id} note={note}/>
                })
            }
        </div>
    )
}

export default Notes