import React,{ useState,useEffect,useContext } from 'react'

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
      constructor(props){
          super(props);
          this.setState({
            squares: Array(9).fill(null),
          })
      }
     
     

      handleClick(i){
          let squares=this.state.squares.slice();
          squares[i] = 'X';

          this.setState({
            squares
          })

      }
    renderSquare(i) {

        console.log('查看this')
        console.log(this)
      return (
      <Square 
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}/>
      );
    }
  
    render() {
      const status = 'Next player: X';
      console.log('查看render this');
      console.log(this.state)
  
      return (
        <div>
          <div className="status">{status}</div>
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
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }







export default Game;