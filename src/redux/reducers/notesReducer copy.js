const initialState = [
    {
        "_id": "6b673203b8eaf219cc1b735",
        "user": "638a522935a444fb67702dfc",
        "title": "My Title",
        "description": "My Description",
        "tag": "testing",
        "date": "2022-12-03T15:11:46.043Z",
        "__v": 0
    },
    {
        "_id": "638db8b2359ee674d81b84",
        "user": "638a522935a444fb67702dfc",
        "title": "My Title New",
        "description": "My Description New",
        "tag": "testing New",
        "date": "2022-12-05T09:24:02.954Z",
        "__v": 0
    },
    {
        "_id": "638db8b235a8ke9e4d81b84",
        "user": "638a522935a444fb67702dfc",
        "title": "My Title New",
        "description": "My Description New",
        "tag": "testing New",
        "date": "2022-12-05T09:24:02.954Z",
        "__v": 0
    },
    {
        "_id": "638db35aa8e9ee64d81b84",
        "user": "638a522935a444fb67702dfc",
        "title": "My Title New",
        "description": "My Description New",
        "tag": "testing New",
        "date": "2022-12-05T09:24:02.954Z",
        "__v": 0
    },
    {
        "_id": "638db8b28he9ee64d81b84",
        "user": "638a522935a444fb67702dfc",
        "title": "My Title New",
        "description": "My Description New",
        "tag": "testing New",
        "date": "2022-12-05T09:24:02.954Z",
        "__v": 0
    },
    {
        "_id": "638dba8e9ee64d81db84",
        "user": "638a522935a444fb67702dfc",
        "title": "My Title New",
        "description": "My Description New",
        "tag": "testing New",
        "date": "2022-12-05T09:24:02.954Z",
        "__v": 0
    },
    {
        "_id": "638db8b23ee64dg81b84",
        "user": "638a522935a444fb67702dfc",
        "title": "My Title New",
        "description": "My Description New",
        "tag": "testing New",
        "date": "2022-12-05T09:24:02.954Z",
        "__v": 0
    }
];

const notesReducer = async (state = initialState, action) => {
    const host = "http://localhost:5000";   //Hard Coding just for now
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4YTUyMjkzNWE0NDRmYjY3NzAyZGZjIn0sImlhdCI6MTY3MDA1ODgxN30.PbtPQ6-FJGCPfkdyfKeJanrsAghVZxfNyBhC_tCzoWM";   //Hard Coding just for now

    switch (action.type) {
        case 'getNotes': return state;

        case 'addNote': {

            //TODO: API CALL
            const { title, description, tag } = action.payload;

            const response = await fetch(`${host}/api/notes/updatenote/${action.payload}`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': authToken,
                },
                body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
            });
            const json = response.json(); // parses JSON response into native JavaScript objects

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

        case 'deleteNote': {
            //TODO: API CALL
            const newNoteState = state.filter((note) => { return note._id !== action.payload; });
            state = newNoteState;
            return state;
        };

        case 'editNote': {
            //TODO: API CALL
            const { title, description, tag } = action.payload;
            const response = await fetch(`${host}/api/notes/updatenote/${action.payload}`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': '',
                },
                body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
            });
            const json = response.json(); // parses JSON response into native JavaScript objects


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