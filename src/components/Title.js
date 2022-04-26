import React from 'react'
import './Title.css';
import linkedin from '../pictures/linkedin.png'
import github from '../pictures/github.png'

function Title() {

  return (
    <div className='Title'>
      <a target='_blank' href='https://www.linkedin.com/in/mirzaselimovic/'><img src={linkedin} width='50px' alt='Linked-In'></img></a>
      <a target='_blank' href='https://github.com/Miep1194390'><img src={github} width='50px' alt='Github'></img></a>

    </div>
  )
}

export default Title;