export const getNotes = () => {
    return {
        type : "getNotes"
    }
}

export const setNotes = (data) => {
    return {
        type : "setNotes",
        payload : data
    }
}