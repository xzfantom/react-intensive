import React from 'react'
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/todoList">TODO</Link>
      </nav>
      <Outlet />
    </div>
  )
}
