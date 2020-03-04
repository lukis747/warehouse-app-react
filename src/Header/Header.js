import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Warehouse system</h1>
      </Link>
    </div>
  )
}
