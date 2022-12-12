const host = "http://localhost:5000";   //Hard Coding just for now
// const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM4YTUyMjkzNWE0NDRmYjY3NzAyZGZjIn0sImlhdCI6MTY3MDA1ODgxN30.PbtPQ6-FJGCPfkdyfKeJanrsAghVZxfNyBhC_tCzoWM";   //Hard Coding just for now

export const setUser = (data) => {
    return {
        type: 'setUser',
        payload: data
    }
}

export const logout = () => {
    return {
        type: 'logout'
    }
}

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

const noteUpdated = (data) => {
    return {
        type: "noteUpdated",
        payload: data
    }
}


//Async action-creator to "FETCH ALL NOTES" from API
export const fetchNotes = (authToken) => {
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
export const addNote = (data, authToken) => {

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
export const deleteNote = (data, authToken) => {

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

//Async action-creator to 'UPDATE A NOTE' via API call
export const updateNote = (data, authToken) => {
    return async (dispatch) => {
        const { _id, title, description, tag } = data;     //destructuring payload for easy assignments
        await fetch(`${host}/api/notes/updatenote/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken,
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        dispatch(noteUpdated(data));
    }
}