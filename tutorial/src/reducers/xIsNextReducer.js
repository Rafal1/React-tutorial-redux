const xIsNext = (state = true, action) => {
    switch (action.type) {
        case 'CHANGE_NEXT_SYMBOL': 
            return !state;
        default:
            return state
    }
}

export default xIsNext