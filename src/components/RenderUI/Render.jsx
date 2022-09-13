import React from 'react'
import './style.css'

export default function Render(props) {
  return (
    <div className='products'>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div className='infor'>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <span>{props.price}</span>
            <button>MUA NGAY</button>
        </div>
    </div>
  )
}
