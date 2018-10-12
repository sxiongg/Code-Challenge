const initialState = {
    searchResults: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SEARCH_RESULTS':
            state = {
                ...state,
                searchResults: action.payload
            }
    }
    return state;
}

export default rootReducer