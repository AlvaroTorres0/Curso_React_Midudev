export const saveGameInLocalStorage = (newBoard, newTurn) => {
    localStorage.setItem('board', JSON.stringify(newBoard));
    localStorage.setItem('turn', JSON.stringify(newTurn));
}

export const restartGameInLocalStorage = () => {
    localStorage.removeItem('board');
    localStorage.removeItem('turn');
}