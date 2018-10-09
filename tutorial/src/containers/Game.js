import React from 'react'
import { calculateWinner } from '../helpers/resultHelper.js'
import { getState } from '../helpers/resultHelper.js'
import Board from '../components/Board'
import { connect } from 'react-redux'
import { makeMove } from '../actions/makeMove.js';
import { changeNextSymbol } from '../actions/changeNextSymbol.js';
import { changeStepNumber } from '../actions/changeStepNumber.js';


const Game = ({ squares, status, moves, nextSymbol, handleClick }) => (
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

const mapStateToProps = (state, ownProps) => {
  function jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  const history = state.history;
  const current = history[history.length - 1]; //state.stepNumber
  const winner = calculateWinner(current.squares);

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

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O')
  }
  let nextSymbol = state.xIsNext ? "X" : "O"
  return {
    historyLength : history.length,
    status : status,
    moves : moves,
    squares : current.squares,
    nextSymbol : nextSymbol
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleClick(i, nextSymbol) {
      const state = await getState(dispatch)
      // console.log('owp: ' + JSON.stringify(ownProps)) //empty
      console.log('stateHandle: ' + JSON.stringify(state))
      dispatch(makeMove(i, nextSymbol))
      dispatch(changeNextSymbol())
      // dispatch(changeStepNumber())
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