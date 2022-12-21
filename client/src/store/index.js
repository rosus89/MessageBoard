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
                boards:  action.payload
            }
        case 'post/create':
            //TODO
            // let board = state.boards.find(element=> element._id = action.payload[0].board)
            // console.log(board)
            // const boards = state.boards.map(obj => {
            //     if (obj._id === board._id) {
            //       return board;
            //     }
            //     return obj;
            //   });

            // let board = state.boards.find(element=> element._id = action.payload.board)
            // const boards = state.boards.map(obj => {
            //     if (obj._id === board) {
            //       return obj.push(board.value, board.user)
            //     }
            //     return obj;
            //   });

            //replace board ?
            return {
                ...state,
                //  boards: boards
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
