import { calculateWinner } from '../helpers/resultHelper.js'

const history = (state = Array(9).fill(null), action) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[action.i]) {
      return;
    }
    squares[action.i] = state.xIsNext ? 'X' : 'O';
    
    state.history.concat([{
        squares: squares,
    }])
    state.xIsNext = !this.state.xIsNext
    state.stepNumber = history.length

    return state;
}

export default history