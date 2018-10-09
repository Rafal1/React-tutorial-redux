export const makeMove = (i, nextSymbol) => ({
    type: 'MAKE_MOVE',
    clickedSquare: i,
    nextSymbol : nextSymbol
})