import React from 'react'
import { calculateWinner } from '../helpers/resultHelper.js'
import { getState } from '../helpers/resultHelper.js'
import Board from '../components/Board'
import { connect } from 'react-redux'
import { makeMove } from '../actions/makeMove.js';
import { changeNextSymbol } from '../actions/changeNextSymbol.js';
import { changeStepNumber } from '../actions/changeStepNumber.js';


const Game = ({ squares, status, nextSymbol, history, handleClick, jumpTo }) => {
  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squares}
          onClick={handleClick}
          nextSymbol={nextSymbol}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const history = state.history
  const current = history[state.stepNumber]
  const winner = calculateWinner(current.squares)

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O')
  }
  let nextSymbol = state.xIsNext ? "X" : "O"
  return {
    history: history,
    status: status,
    squares: current.squares,
    nextSymbol: nextSymbol
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: async (i, nextSymbol) => {
      const state = await getState(dispatch)
      const current = state.history[state.stepNumber];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return
      }
      dispatch(makeMove(i, nextSymbol, state.stepNumber)) //nextSymbol można pobierać ze stanu, a można od góry po komoponentach pociagnąć tak jak tutaj
      let step = state.stepNumber + 1
      dispatch(changeStepNumber(step))
      dispatch(changeNextSymbol((step % 2) === 0))
    },
    jumpTo: async (step) => {
      dispatch(changeStepNumber(step))
      dispatch(changeNextSymbol((step % 2) === 0))
    }
  }
}

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   return {
//     ...stateProps,  // optional
//     ...dispatchProps,  // optional
//     onChangeWithNeededValue: (newValue) => (
//       dispatchProps.onChange(
//         newValue,
//         stateProps.needeedValue  // <<< here the magic happens
//       )
//     )
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Game)