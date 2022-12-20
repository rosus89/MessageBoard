const initialState= {
    loaded: false
}


function reducer (state, action) {
    // const asd = async () => 

    
    switch (action.type) {
        case 'board/get':
            return {
            ...state,
            boards: action.payload
            }  
        case 'board/create':
            return {
                ...state
            }
        case 'post/create':
            return {
                ...state,
                boards:{...state.boards, posts: action.payload}
            }
        case 'post/get':
            return {
                ...state,
                boards: {...state.boards, posts: action.payload} 
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
