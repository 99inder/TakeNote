const initialState = [];

const notesReducer = (state = initialState, action) => {

    switch (action.type) {

        //ACTION: fetchNotes
        case 'notesFetched': { return action.payload; }

        //ACTION: noteAdded
        case 'noteAdded': {
            return state = state.concat(action.payload);
        }

        //ACTION: deleteNote
        case 'noteDeleted': {
            //TODO: API CALL
            const newNoteState = state.filter((note) => { return note._id !== action.payload; });
            state = newNoteState;
            return state;
        };

        //ACTION: editNote
        case 'noteUpdated': {

            //Front End Logic
            const newNotesState = JSON.parse(JSON.stringify(state));     //create a deep copy of state as the state is immutable in redux
            for (let index = 0; index < state.length; index++) {

                const element = state[index];
                if (element._id === action.payload._id) {
                    newNotesState[index].title = action.payload.title;
                    newNotesState[index].description = action.payload.description;
                    newNotesState[index].tag = action.payload.tag;
                    break;
                }
            }
            return newNotesState;
        }

        default: return state;
    }
}

export default notesReducer;