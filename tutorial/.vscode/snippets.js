//  class Game extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         // history: [{
//         //   squares: Array(9).fill(null),
//         // }],
//         stepNumber: 0,
//         xIsNext: true,
//       };
//     }
  
//     jumpTo(step) {
//       this.setState({
//         stepNumber: step,
//         xIsNext: (step % 2) === 0,
//       });
//     }
  
//     render() {
//       const history = this.props.history;
//       const current = history[this.state.stepNumber];
//       const winner = calculateWinner(current.squares);
  
//       const moves = history.map((step, move) => {
//         const desc = move ?
//           'Go to move #' + move :
//           'Go to game start';
//         return (
//           <li key={move}>
//             <button onClick={() => this.jumpTo(move)}>{desc}</button>
//           </li>
//         );
//       });
  
//       let status;
//       if (winner) {
//         status = 'Winner: ' + winner;
//       } else {
//         status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//       }
  
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board
//               squares={current.squares}
//               onClick={(i) => this.props.handleClick(i)}
//             />
//           </div>
//           <div className="game-info">
//             <div>{status}</div>
//             <ol>{moves}</ol>
//           </div>
//         </div>
//       );
//     }
  
//   }


  // return bindActionCreators({ handleClick : handleClick}, dispatch);
