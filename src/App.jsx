import { useState } from 'react';
import logo from './assets/cocretainc.jpg'


  
function App() {
    
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);

    const handleFirstNumberChange = (e) => {
      setFirstNumber(parseFloat(e.target.value));
  };

  const handleSecondNumberChange = (e) => {
      setSecondNumber(parseFloat(e.target.value));
  };

  const add = () => {
      setResult(firstNumber + secondNumber);
  };

  const subtract = () => {
      setResult(firstNumber - secondNumber);
  };

  const multiply = () => {
      setResult(firstNumber * secondNumber);
  };

  const divide = () => {
      setResult(firstNumber / secondNumber);
  };


    const dataUsers = [
      { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
      { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
      { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
      { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
      { name: 'Carlos', lastName: 'Sánchez', hobbies: ['cocina', 'videojuegos'], age: 35 },
      { name: 'Sofía', lastName: 'Ruiz', hobbies: ['natación', 'teatro'], age: 29 },
      { name: 'Luis', lastName: 'Hernández', hobbies: ['jardinería', 'patinar'], age: 31 },
      { name: 'Elena', lastName: 'Díaz', hobbies: ['fotografía', 'montañismo'], age: 27 },
      { name: 'Javier', lastName: 'Torres', hobbies: ['ajedrez', 'surf'], age: 33 },
      { name: 'Laura', lastName: 'Romero', hobbies: ['yoga', 'ciclismo'], age: 26 },
      { name: 'David', lastName: 'Gómez', hobbies: ['escritura', 'musculación'], age: 34 },
      { name: 'Isabel', lastName: 'Jiménez', hobbies: ['piano', 'voleibol'], age: 23 },
      { name: 'Miguel', lastName: 'Alvarez', hobbies: ['cocina', 'pintura'], age: 37 },
      { name: 'Carmen', lastName: 'Moreno', hobbies: ['jardinería', 'cine'], age: 24 },
      { name: 'Alejandro', lastName: 'Dominguez', hobbies: ['viajar', 'fotografía'], age: 30 },
      { name: 'Rosa', lastName: 'Ortega', hobbies: ['bailar', 'leer'], age: 32 },
      { name: 'Francisco', lastName: 'Vargas', hobbies: ['música', 'senderismo'], age: 28 },
      { name: 'Lucía', lastName: 'Ramos', hobbies: ['gimnasia', 'ciclismo'], age: 26 },
      { name: 'Antonio', lastName: 'Castillo', hobbies: ['cocinar', 'pintura'], age: 29 },
      { name: 'Eva', lastName: 'Iglesias', hobbies: ['cine', 'teatro'], age: 31 },
      { name: 'José', lastName: 'Fernández', hobbies: ['fútbol', 'baloncesto'], age: 27 },
      { name: 'Teresa', lastName: 'Serrano', hobbies: ['pintura', 'música'], age: 33 },
      { name: 'Manuel', lastName: 'Garrido', hobbies: ['cocina', 'fotografía'], age: 30 },
      { name: 'Rocío', lastName: 'Cortés', hobbies: ['patinar', 'leer'], age: 28 },
      { name: 'Pablo', lastName: 'Marín', hobbies: ['surf', 'senderismo'], age: 25 },
      { name: 'Beatriz', lastName: 'Luna', hobbies: ['piano', 'yoga'], age: 29 },
      { name: 'Diego', lastName: 'Ibáñez', hobbies: ['ciclismo', 'música'], age: 34 },
      { name: 'Nuria', lastName: 'Gil', hobbies: ['teatro', 'cocina'], age: 27 },
      { name: 'Rubén', lastName: 'Sanz', hobbies: ['fútbol', 'lectura'], age: 32 },
      { name: 'Cristina', lastName: 'Herrero', hobbies: ['bailar', 'pintura'], age: 26 }
    ];
  
    const showUsers = dataUsers.map((user) => 
      
        <div key={user.lastName} className='containerUsers'>
          <p>Nombre: {user.name}</p>
          <p>Apellidos: {user.lastName}</p>
          <p>Hobbies: {user.hobbies.join(', ')}</p>
          <p>Edad: {user.age}</p>
        </div>
      )
      
      return (
        <>
        <header>
         <img src={logo}  alt='logo'/>
        </header>
        <div className="container">
          {showUsers}
        </div>
        <form className='calculator'>
          <input 
            type="number" 
            value={firstNumber} 
            onChange={handleFirstNumberChange}
          />
          <input 
            type="number" 
            value={secondNumber} 
            onChange={handleSecondNumberChange} 
          />
          <button type='button' onClick={()=>{add()}}>+</button>
          <button type='button' onClick={()=>{subtract()}}>-</button>
          <button type='button' onClick={()=>{multiply()}}>*</button>
          <button type='button' onClick={()=>{divide()}}>/</button>
          <p>Resultado: {result}</p>
        </form>
        <footer>
          <p>Todos los derechos reservados.</p>
          <p>Cocretas INC ©</p>
          <p>Dirección: Simancas (Madrid)</p>
          <p>Teléfono: 917335673 - 635444912</p>
          <p>Email: cocretasINC@hotmail.com</p>
        </footer>
        </>
       
      )
     
}


export default App

