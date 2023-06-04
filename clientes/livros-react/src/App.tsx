import { Link, Outlet } from 'react-router-dom';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import './LivroLista'

function App() {
  document.title = 'Livros React'
  
  return (
    <div className="App"> 
      <p>teste</p>
      <nav className="navbar navbar-dark bg-dark">
        <ul>
          <li className='nav-item'><Link to={'/lista'} className="navbar-brand">Catalogo</Link></li>
          <li className='nav-item'><Link to={'/dados'}className="navbar-brand">Novo</Link></li>
        </ul>
      </nav>
      <div><Outlet /></div>

    </div>
  );
}

export default App;

