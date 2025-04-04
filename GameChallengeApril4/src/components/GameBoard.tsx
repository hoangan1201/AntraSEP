import React, { useEffect, useState } from "react";

export default function GameBoard({ dimension }: any) {
  const [gameBoard, setGameBoard] = useState<
    Array<Array<null | "red" | "yellow">>
  >([]);
  const [currentTurn, setCurrentTurn] = useState<"red" | "yellow">("red");
  const [winner, setWinner] = useState<"red" | "yellow" | "tie" | null>(null);

  useEffect(() => {
    const initialBoard = Array.from({ length: dimension }, () =>
      Array(dimension).fill(null)
    );
    setGameBoard(initialBoard);
  }, [dimension]);

  function handleCellClick(id: number) {
    if (winner) return;
    console.log("Cell Click");
    const tempBoard = gameBoard.map((row) => [...row]);
    for (let row = dimension - 1; row > -1; row--) {
      if (!tempBoard[row][id]) {
        tempBoard[row][id] = currentTurn;

        const isWin = checkResult(tempBoard, row, id, currentTurn);

        if (isWin) {
          setWinner(currentTurn);
          //   alert(`${currentTurn.toUpperCase()} wins!`);
        } else {
          //   const isTie = tempBoard.every((row) =>
          //     row.every((cell) => cell !== null)
          //   );
          //   if (isTie) {
          //     setWinner("tie");
          //     alert("It's a tie!");
          if (checkTie(tempBoard)) {
            setWinner("tie");
          }
        }

        setGameBoard(tempBoard);
        setCurrentTurn(currentTurn == "red" ? "yellow" : "red");
        break;
      }
    }
  }

  type Cell = "red" | "yellow" | null;
  function checkResult(
    board: Cell[][],
    rowIndex: number,
    columnIndex: number,
    turn: "red" | "yellow"
  ): boolean {
    const steps = [-1, 1]; // -1 to backward and 1 to forward
    const directionType = [
      [0, 1], // horizontal
      [1, 0], // vertical
      [1, 1], // diagonal
      [1, -1], // diagonal
    ];

    for (const [directionRow, directionColumn] of directionType) {
      let count = 1;

      for (const step of steps) {
        let tempRowIndex = rowIndex + directionRow * step;
        let tempColumnIndex = columnIndex + directionColumn * step;

        while (
          tempRowIndex >= 0 &&
          tempRowIndex < board.length &&
          tempColumnIndex >= 0 &&
          tempColumnIndex < board[0].length &&
          board[tempRowIndex][tempColumnIndex] === turn
        ) {
          count++;
          tempRowIndex += directionRow * step;
          tempColumnIndex += directionColumn * step;
        }
      }

      if (count >= 4) return true;
    }

    return false;
  }

  function checkTie(board: Cell[][]) {
    return board.every((row) => row.every((cell) => cell !== null));
  }

  function resetGame() {
    const newBoard = Array.from({ length: dimension }, () =>
      Array(dimension).fill(null)
    );
    setGameBoard(newBoard);
    setCurrentTurn("red");
    setWinner(null);
  }

  function capitalizeFirstLetter(str:any) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

  return (
    <div>
        <button onClick={resetGame}>Reset</button>
      {!winner && <h2 style={{ color: currentTurn }}>Player's Turn</h2>}
      {winner && (
        <h2 style={{ color: winner === "tie" ? "green" : winner }}>
          {capitalizeFirstLetter(winner)} player wins!
        </h2>
      )}
      {gameBoard.map((row, rowIndex) => {
        return (
          <div className="row" key={rowIndex}>
            {row.map((column, columnIndex) => {
              return (
                <div
                  className={`cell ${gameBoard[rowIndex][columnIndex]}`}
                  key={columnIndex}
                  onClick={() => handleCellClick(columnIndex)}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
