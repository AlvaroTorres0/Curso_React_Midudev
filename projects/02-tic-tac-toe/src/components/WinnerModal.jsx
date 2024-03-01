import Square from "../components/Square";

export function WinnerModal({ winner, restartGame}) {
    if (winner === null ) {
        return null
    }
    return (
        <section className="winner">
            <div className="text">
                {
                    winner !== false && (
                        <>
                        <h2>Ganador</h2>
                        <Square isSelected={true}>
                            {winner}
                        </Square>
                        </>
                    )
                }

                {
                    winner === false && (
                        <h2>Empate</h2>
                    )
                }

                <button onClick={restartGame}>Nuevo juego</button>
            </div>
        </section>
    )
}