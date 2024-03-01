import { useState } from "react";
import Square from "./components/Square";
import confetti from "canvas-confetti";
import { TURNS } from "./constants/constants";
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { restartGameInLocalStorage, saveGameInLocalStorage } from "./logic/localStorageLogic";

function App() {

  //* Asignamos los elementos del local storage a los estados (si es que existen), pero lo hacemos en los estados, para no estar 
  //*llamando al local storage cada vez que se renderiza el componente
  const [board, setBoard] = useState(() => {
    const boardInLocalStorage = localStorage.getItem('board')
    return boardInLocalStorage ? JSON.parse(boardInLocalStorage) : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(() => {
    const turnInLocalStorage = localStorage.getItem('turn')
    return turnInLocalStorage ? JSON.parse(turnInLocalStorage) : TURNS.x
  })

  const [winner, setWinner] = useState(null)


  //* Reiniciar juego
  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    restartGameInLocalStorage()
  }

  const updateBoard = (clickedCell) => {
    //* Validamos que no se pueda hacer click en una celda que ya tiene un valor
    if (board[clickedCell] || winner) return
      
    //* Hacemos una copia del estado actual del tablero con el spread operator y así no mutar el estado
    const newBoard = [...board];
    newBoard[clickedCell] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    //* Guardar partida en el local storage
    saveGameInLocalStorage(newBoard, newTurn);
  
    //* Validamos si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  
  return (
    <main className="board">
      <h1>Tic tac toe</h1>

      <section className="game">
        {
          board.map((_,index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={ turn=== TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={ turn=== TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

      <button onClick={() => restartGame}>Reiniciar juego</button>

      <WinnerModal winner={winner} restartGame={restartGame}></WinnerModal>

    </main>
  )
}

export default App