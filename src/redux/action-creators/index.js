const host = "http://localhost:5000";   //Hard Coding just for now
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4YTUyMjkzNWE0NDRmYjY3NzAyZGZjIn0sImlhdCI6MTY3MDA1ODgxN30.PbtPQ6-FJGCPfkdyfKeJanrsAghVZxfNyBhC_tCzoWM";   //Hard Coding just for now

const notesFetched = (data) => {
    return {
        type: "notesFetched",
        payload: data
    }
}

const noteAdded = (data) => {
    return {
        type: "noteAdded",
        payload: data
    }
}

const noteDeleted = (data) => {
    return {
        type: "noteDeleted",
        payload: data
    }
}

export const editNote = (data) => {
    return {
        type: "editNote",
        payload: data
    }
}

//Async action-creator to "FETCH ALL NOTES" from API
export const fetchNotes = () => {
    return async (dispatch) => {

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken,
            }
        });
        const fetchedNotes = await response.json(); // parses JSON response into native JavaScript objects
        dispatch(notesFetched(fetchedNotes));
    }
}

//Async action-creator to "ADD A NOTE" via API call
export const addNote = (data) => {

    return async (dispatch) => {
        const { title, description, tag } = data;     //destructuring payload for easy assignments
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken,
            },
            body: JSON.stringify({ "title": title, "description": description, "tag": tag })
        });
        const payload = await response.json(); // parses JSON response into native JavaScript objects
        dispatch(noteAdded(payload));
    }
}

//Async action-creator to 'DELETE A NOTE' via API call
export const deleteNote = (data) => {

    return async (dispatch) => {
        await fetch(`${host}/api/notes/deletenote/${data}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken,
            }
        });
        dispatch(noteDeleted(data));
    }
}
