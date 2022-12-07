export const getNotes = () => {
    return {
        type : "getNotes"
    }
}

export const addNote = (data) => {
    return {
        type : "addNote",
        payload : data
    }
}

export const deleteNote = (data) => {
    return {
        type : "deleteNote",
        payload : data
    }
}

export const editNote = (data) => {
    return {
        type : "editNote",
        payload : data
    }
}