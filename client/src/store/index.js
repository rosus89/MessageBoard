const initialState= {
    loaded: false
}


function reducer (state, action) {
    switch (action.type) {
        case 'createBoard':
            return {
                ...state
            }
        case 'createPost':
            return {
                ...state,
            }
        case 'setUser':
            return {
                ...state,
                user: action.payload
            }
        case 'setLoading':
            return {
                ...state,
                loaded: action.payload
            }

        default:
            return state;
    
    }
}





export {reducer, initialState};
