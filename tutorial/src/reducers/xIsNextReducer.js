const xIsNext = (state = true, action) => {
    state.xIsNext = action.xIsNext
    return state
}

export default xIsNext