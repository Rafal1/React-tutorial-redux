import { calculateWinner } from '../helpers/resultHelper.js'

const history = (state = [{ squares: Array(9).fill(null) }], action) => {
    const current = state[state.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[action.i] = action.xIsNext ? 'X' : 'O';
    return state;
}

export default history