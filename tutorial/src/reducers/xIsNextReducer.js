const xIsNext = (state = true, action) => {
    switch (action.type) {
        case 'CHANGE_NEXT_SYMBOL': 
            return action.value;
        default:
            return state
    }
}

export default xIsNext