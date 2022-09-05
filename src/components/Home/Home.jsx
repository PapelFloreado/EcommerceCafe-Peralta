import React from 'react'
import Carousel from "../Carousel/Carousel"
import { motion } from "framer-motion"
import { Container } from 'react-bootstrap'
import cafe from "../../assets/img/cafe-home.png"
import "./Home.css"
 

const Home = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 1.2,
    delay: 0,
    ease: 'linear'
    }}
    >
      <Carousel/>
      <Container className=''>
        <h2 className=' linea home-title home-container justify-content-center'>Nuestro Café</h2>
        <div className='pt-5 pb-5 home-container img-fluid justify-content-around'>
          <img className='img-home px-2 d-flex' src={cafe} alt="cafe recien servido"></img>
          <div className='mx-3 mt-3'>
            <p className='text-home'>Para preparar un buen café en casa tenés que prestar atención a cosas sencillas que van a mejorar mucho el sabor de tu bebida. En este artículo te comparto 10 pasos fáciles para preparar un buen café en casa. Durante mucho tiempo,  yo fui una de esas personas a las que les gusta tomar café en una cafetería, pero que evitaba beberlo en casa porque no sabía como hacer para preparar algo decente. En la medida que fui desarrollando mi conocimiento cafetero me di cuenta de lo equivocado que estaba.</p>
            <p className='text-home'>El café que preparamos en casa, (con cualquier cafetera) puede ser diferente y más rico que lo que ofrece la mayoría de las cafeterías. Y además, siguiendo los pasos que detallamos en este artículo, vas a poder ver que no hay motivo por el que cualquier persona que preste un poquito de atención deba terminar tomando café feo en su casa.Para preparar un buen café no hay que comprarse una cafetera cara, cualquiera que tengas en tu casa va a producir una taza decente. No olvides que los mejores cafés del mundo, que generalmente son comprados por japoneses o americanos, se disfrutan usando un dripper y un filtro sencillo de papel. ¿Y entonces? ¿Qué tenés que hacer para preparar un buen café?
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}

export default Home