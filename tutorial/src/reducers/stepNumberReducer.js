const stepNumber = (state = 0, action) => {
    state.stepNumber = action.length
    return state
}

export default stepNumber