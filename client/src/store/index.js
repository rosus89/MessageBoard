const initialState= {
    loaded: false
}


function reducer (state, action) {

    
    switch (action.type) {
        case 'board/get':
            return {
                ...state,
                boards: action.payload
            }  
        case 'board/create':
            return {
                ...state,
                boards:  [...state.boards,action.payload]
            }
        case 'post/create':
            let boards = state.boards.map(board => {
                if (board._id === action.payload.board) {
                  return {...board, posts: [...board.posts, action.payload]};
                }
                else return board
            })
            return {
                ...state,
                boards
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
