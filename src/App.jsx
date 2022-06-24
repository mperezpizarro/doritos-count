import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    if(localStorage.getItem('count')){
      setCount(parseInt(localStorage.getItem('count')))
    }else{
      setCount(0)
    }
  }, App)

  function chupito(){
    setCount(count=>count+1)
    localStorage.setItem('count', (count+1))
  }

  function reset(){
    setCount(0)
    localStorage.setItem('count', 0)
  }

  return (
    <div className="App">
      <h1>Contador de <i>World Premiere</i></h1>
      <h2>{count}</h2>
      <div className="botones">
        <Button onClick={chupito} value="¡Chupito!"></Button>
        <Button onClick={reset} value="Resetear"></Button>
      </div>
    </div>
  )
}

export default App
