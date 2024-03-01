import { useEffect, useState } from 'react'

export function App () {
  const CATFACT_ENDPOINT = 'https://catfact.ninja/fact'

  const [fact, setFact] = useState()
  const [firstWord, setFirstWord] = useState()
  // Hacemos el primer fetch para obtener el hecho aleatorio
  useEffect(() => {
    fetch(CATFACT_ENDPOINT)
      .then(response => response.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (fact) {
      setFirstWord(fact.split(' ')[0])
    }
  }, [fact])

  return (
    <main>
      <h1>App d gatitos</h1>
      {
        fact && <p>{fact}</p>
      }

      <h2>Primera palabra</h2>
      {
        firstWord && <p>{firstWord}</p>
      }
    </main>
  )
}
