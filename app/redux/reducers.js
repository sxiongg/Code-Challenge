const initialState = {
    searchResults: [],
    placeDetails: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SEARCH_RESULTS':
            state = {
                ...state,
                searchResults: action.payload
            }
            console.log(state.searchResults)
        case 'SET_PLACE_DETAILS':
            state = {
                ...state,
                placeDetails: action.payload
            }
            // console.log(state.placeDetails)
        default: 
            return state
    }
}

export default rootReducer