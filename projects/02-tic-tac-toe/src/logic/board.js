import { WINNER_COMBINATIONS } from "../constants/constants";

//* Función para validar si hay un ganador
export const checkWinner = (boardToCheck) => {
    //* Iteramos sobre todas las combinaciones ganadoras
    for (const combination of WINNER_COMBINATIONS) {
      const [a, b, c] = combination
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
}

//* Valida si hay un empate en el nuevo tablero
export const checkEndGame = (newBoard) => {
    return newBoard.every(cell => cell !== null)
}