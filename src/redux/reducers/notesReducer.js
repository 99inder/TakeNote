const initialState = [];

const host = "http://localhost:5000";   //Hard Coding just for now

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
        case 'editNote': {
            //API CALL
            const { title, description, tag } = action.payload;     //destructuring payload for easy assignments
            (async () => {
                const response = await fetch(`${host}/api/notes/updatenote/${action.payload}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': '',
                    },
                    body: JSON.stringify({ "title": title, "description": description, "tag": tag }) // body data type must match "Content-Type" header
                });
                // eslint-disable-next-line
                const json = await response.json(); // parses JSON response into native JavaScript objects
            })();


            //Front End Logic
            for (let index = 0; index < state.length; index++) {

                const element = state[index];
                if (element._id === action.payload.id) {
                    element.title = action.payload.title;
                    element.description = action.payload.description;
                    element.tag = action.payload.tag;
                }
            }
            console.log("Edit funtion worked");
            return state;
        }

        default: return state;
    }
}

export default notesReducer;