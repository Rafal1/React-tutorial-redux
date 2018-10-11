import { calculateWinner } from '../helpers/resultHelper.js'

const history = (state = [{ squares: Array(9).fill(null) }], action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      let sq = state[state.length - 1].squares.slice()
      if (calculateWinner(sq) || sq[action.clickedSquare]) {
        return state
      }
      sq[action.clickedSquare] = action.nextSymbol
      return [
        ...state,
          {
            squares: sq
          }
      ]
    default:
      return state
  }
}

export default history