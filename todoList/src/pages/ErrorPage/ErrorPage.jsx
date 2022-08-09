import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ErrorPage.css'

export default function ErrorPage() {
  return (
    <div className='Container'>
      <div className='ErrorPage'>
        <p>Oops... Something went wrong.</p>  
        <p>Go to <Link to='/'>Login page</Link>.</p> 
      </div>
    </div>
  )
}
