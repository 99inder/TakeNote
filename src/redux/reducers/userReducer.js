const initialState = null;

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login': { console.log(action.payload); return state = action.payload }
        case 'logout': { return state = null }

        default: return state;
    }
}

export default userReducer;