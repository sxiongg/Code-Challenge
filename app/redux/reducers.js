const initialState = {
    searchResults: [],
    placeDetails: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload
            }
        case 'SET_PLACE_DETAIL':
            return {
                ...state,
                placeDetails: action.payload
            }
        default: 
            return state
    }
}

export default rootReducer