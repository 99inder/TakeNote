const initialState = [];

const host = "http://localhost:5000";   //Hard Coding just for now
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4YTUyMjkzNWE0NDRmYjY3NzAyZGZjIn0sImlhdCI6MTY3MDA1ODgxN30.PbtPQ6-FJGCPfkdyfKeJanrsAghVZxfNyBhC_tCzoWM";   //Hard Coding just for now
const notesReducer = (state = initialState, action) => {

    switch (action.type) {

        //ACTION: fetchNotes
        case 'fetchNotes': {

            //API CALL
            (async () => {
                const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': authToken,
                    }
                });
                const json = await response.json(); // parses JSON response into native JavaScript objects
                console.log(json);
                state = [...state, json];
            })();

            //Front End Logic
            return state;
        }

        //ACTION: addNote
        case 'addNote': {
            //API CALL
            const { title, description, tag } = action.payload;     //destructuring payload for easy assignments

            (async () => {
                const response = await fetch(`${host}/api/notes/addnote`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': authToken,
                    },
                    body: JSON.stringify({ "title": title, "description": description, "tag": tag })
                });
                const json = await response.json(); // parses JSON response into native JavaScript objects
            })();

            //Front End Logic
            const note = {
                "_id": "638db8b23ee64dg81b84",
                "user": "638a522935a444fb67702dfc",
                "title": action.payload.title,
                "description": action.payload.description,
                "tag": action.payload.tag,
                "date": "2022-12-05T09:24:02.954Z",
                "__v": 0
            };
            return state = state.concat(note);
        };

        //ACTION: deleteNote
        case 'deleteNote': {
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