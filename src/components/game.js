import React, { useEffect, useState } from "react";
import "./game.css";

function Game() {
  const [Player1, setPlayer1] = useState(false);
  const [Player2, setPlayer2] = useState(false);
  const [Winner, setWinner] = useState("");
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [boardStates, setBoardStates] = useState([]);
  const [clickedBoxes, setClickedBoxes] = useState(0);
  function firstPlayer(player1, player2) {
    var first = Math.floor(Math.random() * 2) + 1;
    if (first === 1) {
      setPlayer1(true);
      setPlayer2(false);
    }
    if (first === 2) {
      setPlayer1(false);
      setPlayer2(true);
    }
    console.log(first);
  }
  function addMarkOnBoard(value) {
    if (Player1 === true) {
      setBoardStates({ ...boardStates, [value]: "X" });
      setPlayer1(false);
      setPlayer2(true);
    }
    if (Player2 === true) {
      setBoardStates({ ...boardStates, [value]: "0" });
      setPlayer1(true);
      setPlayer2(false);
    }
    setClickedBoxes(clickedBoxes + 1);
    console.log(boardStates);
  }

  function checkWinner(BoardState) {
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < rows.length; i++) {
      const [a, b, c] = rows[i];

      // Check if the game board contains winning combination
      if (
        BoardState[a] &&
        BoardState[a] === BoardState[b] &&
        BoardState[a] === BoardState[c]
      ) {
        // Return the winner ('x' or 'o')
        if (Player1 === true) {
          setWinner("Player2");
          setClickedBoxes(0);
          setScorePlayer2(scorePlayer2 + 1);
        }
        if (Player2 === true) {
          setWinner("Player1");
          setClickedBoxes(0);
          setScorePlayer1(scorePlayer1 + 1);
        }
        setTimeout(() => {
          return setBoardStates([]);
        }, 2000);
      }
    }
    if (clickedBoxes === 9) {
      setClickedBoxes(0);
      return setBoardStates([]);
    }
    // Otherwise do nothing
    return null;
  }

  useEffect(() => {
    if (Player1 === false && Player2 === false) firstPlayer(Player1, Player2);
    if (Winner) setWinner("");

    checkWinner(boardStates);
    console.log(boardStates);
  }, [boardStates]);
  return (
    <div className="game">
      <h3>
        <span> Player One {scorePlayer1}</span> - {scorePlayer2} Player Two
      </h3>
      <button
        onClick={() => {
          setScorePlayer1(0);
          setScorePlayer2(0);
        }}
      >
        Restart
      </button>
      {Winner && (
        <div className="WinnerAnouncement">{Winner + " has won the game."}</div>
      )}
      <ul>
        <li
          onClick={() => {
            if (!boardStates[0]) addMarkOnBoard(0);
          }}
        >
          {boardStates[0] ? (
            <p className="taken">{boardStates[0]}</p>
          ) : (
            (Player1 && <p>X</p>) || (Player2 && <p>0</p>)
          )}
        </li>
        <li
          onClick={() => {
            if (!boardStates[1]) addMarkOnBoard(1);
          }}
        >
          {boardStates[1] ? (
            <p className="taken">{boardStates[1]}</p>
          ) : (
            (Player1 && <p>X</p>) || (Player2 && <p>0</p>)
          )}
        </li>
        <li
          onClick={() => {
            if (!boardStates[2]) addMarkOnBoard(2);
          }}
        >
          {boardStates[2] ? (
            <p className="taken">{boardStates[2]}</p>
          ) : (
            (Player1 && <p>X</p>) || (Player2 && <p>0</p>)
          )}
        </li>
        <li
          onClick={() => {
            if (!boardStates[3]) addMarkOnBoard(3);
          }}
        >
          {boardStates[3] ? (
            <p className="taken">{boardStates[3]}</p>
          ) : (
            (Player1 && <p>X</p>) || (Player2 && <p>0</p>)
          )}
        </li>
        <li
          onClick={() => {
            if (!boardStates[4]) addMarkOnBoard(4);
          }}
        >
          {boardStates[4] ? (
            <p className="taken">{boardStates[4]}</p>
          ) : (
            (Player1 && <p>X</p>) || (Player2 && <p>0</p>)
          )}
        </li>
        <li
          onClick={() => {
            if (!boardStates[5]) addMarkOnBoard(5);
          }}
        >
          {boardStates[5] ? (
            <p className="taken">{boardStates[5]}</p>
          ) : (
            (Player1 && <p>X</p>) || (Player2 && <p>0</p>)
          )}
        </li>
        <li
          onClick={() => {
            if (!boardStates[6]) addMarkOnBoard(6);
          }}
        >
          {boardStates[6] ? (
            <p className="taken">{boardStates[6]}</p>
          ) : (
            (Player1 && <p>X</p>) || (Player2 && <p>0</p>)
          )}
        </li>
        <li
          onClick={() => {
            if (!boardStates[7]) addMarkOnBoard(7);
          }}
        >
          {boardStates[7] ? (
            <p className="taken">{boardStates[7]}</p>
          ) : (
            (Player1 && <p>X</p>) || (Player2 && <p>0</p>)
          )}
        </li>
        <li
          onClick={() => {
            if (!boardStates[8]) addMarkOnBoard(8);
          }}
        >
          {boardStates[8] ? (
            <p className="taken">{boardStates[8]}</p>
          ) : (
            (Player1 && <p>X</p>) || (Player2 && <p>0</p>)
          )}
        </li>
      </ul>
      <h2>{Player1 ? "Player one Turn" : <span>Player Two Turn</span>}</h2>
    </div>
  );
}

export default Game;
