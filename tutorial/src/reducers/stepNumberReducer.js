const stepNumber = (state = 0, action) => {
    switch (action.type) {
        case 'CHANGE_STEP_NUMBER': 
            return state = action.stepNumber;
        default:
            return state
    }
}

export default stepNumber