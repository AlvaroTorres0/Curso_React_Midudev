import { useEffect,useState } from 'react';

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  //!En la consola del navegado, podemos utilizar getEventListeners(window) para ver los eventos que tienen suscripciones activas

  useEffect(() => {
    const handleMove = (event =>{
      const {clientX, clientY} = event;
      console.log(clientX, clientY);
      setPosition({x: clientX, y: clientY})
    })

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //* Limpieza
    //* Es cuando el componente se desmonta o cuando cambian las dependencias antes de ejecutar el useEffect de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
    
  }, [enabled])

  const changeState = () => {
    setEnabled(!enabled);
  }

  return (
    <main>
      <div style={{position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`}}>

      </div>
      <button onClick={changeState}>{enabled ? 'Desactivar' :  'Activar'} seguimiento del puntero</button>
    </main>
  )
}

export default App
