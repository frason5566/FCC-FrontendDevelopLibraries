import React from 'react'
// import ReactDOM from 'ReactDOM'
import './App.css'

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      id={props.value}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />;
  }
  render() {
    return (
      <div className="game-board">
        <div className='court'>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: Array(9).fill(null),
      squares: Array(9).fill(null),
      xNext: true,
      count: 0
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xNext: !this.state.xNext,
      count: this.state.count + 1
    })
  }
  back() {
    this.setState({
      squares: this.state.begin,
      xNext: true,
      count: 0
    })
  }
  render() {
    // const begin = this.state.begin;
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if(this.state.count === 9){
      status = "Tie Game";
    }
    else {
      status = 'Next player: ' + (this.state.xNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className='title'>Tic Tac Toe</div>
        <div className="status">{status}</div>
        <div className="game">
          <Board
            squares={this.state.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className='reset'>
          <button onClick={() => this.back()}>
            Reset Game
          </button>
        </div>
        <div className='author'>
          <span>By    </span>   <a href='https://frason5566.github.io/Portfolio/index.html'> Frason</a>
        </div>
      </div>
    );
  }
}

// ========================================

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App