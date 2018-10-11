export const makeMove = (i, nextSymbol, stepNumber) => ({
    type: 'MAKE_MOVE',
    clickedSquare: i,
    nextSymbol : nextSymbol,
    stepNumber : stepNumber
})