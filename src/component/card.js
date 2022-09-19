import React from 'react'
import './App.css'

export default function Card(props) {
  const {title, author, desc} = props;
  return (
      <div className='card-inside'>
        <h1>{title}</h1>
        <small>{author}</small>
        <p>{desc}</p>
      </div>
  )
}
