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

const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'getNotes': return state;
        case 'setNotes': return state = action.payload;
        default: return state;
    }
}

export default notesReducer;