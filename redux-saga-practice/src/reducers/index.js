const defaultState = {
    user: null,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.data,
            }
        default:
            return state;
    }
}

export default reducer;
