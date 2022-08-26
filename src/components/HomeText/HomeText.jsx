import React from 'react'
import "./HomeText.css"

const HomeText = () => {
  return (
    <div>
        <h2 className='mt-5 our d-flex'>Nosotros</h2>
        <div className='d-flex'>
          <img src="https://www.cucinare.tv/wp-content/uploads/2022/08/Cafe-1-1024x576.jpg" alt="imagen cafe" className="img-coffe mt-5 mb-5" ></img>
          <h2 className='mt-5 mx-5'>Conoce mas de nuestra historia...</h2>
        </div>
    </div>
  )
}

export default HomeText