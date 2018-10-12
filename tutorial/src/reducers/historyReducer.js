
const history = (state = [{ squares: Array(9).fill(null) }], action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      function filterFunc(value, index) {
        return index <= action.stepNumber
      }
      const historyMod = state.filter(filterFunc)
      //immutable pardigm -> slice i concat na stanie, ani zmienne na podstawie stanu nie zadziałają jak chcesz zwrócić stan
      // state.concat({
      //   squares: sq
      // })
      // let historyMod = state.slice(0, action.stepNumber + 2);  //.step number before increase
      let sq = historyMod[historyMod.length - 1].squares.slice()
      console.log('historyMod:' + JSON.stringify(historyMod))
      sq[action.clickedSquare] = action.nextSymbol

      return [
        ...historyMod,
        {
          squares: sq
        }
      ]
    default:
      return state
  }
}

export default history