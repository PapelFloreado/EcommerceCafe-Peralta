import React, {useEffect} from 'react'
import Carousel from "../Carousel/Carousel"
import { motion } from "framer-motion"
import { Container } from 'react-bootstrap'
import cafe from "../../assets/img/cafe-home.png"
import "./Home.css"
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {

  const {ref, inView} = useInView({threshold:0.3})
  const animation = useAnimation()

  
  useEffect(() => {
    if(inView){
      animation.start({
        opacity:1,
        transition:{
          ease:"easeInOut",
          duration:1,
          delay:0.1,          
        }
      })
    }if(!inView){
      animation.start({
        opacity:0,
        
      })
    }
  }, [inView, animation])

  
  return (
    <motion.div initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 1.5,
    delay: 0,
    ease: "easeInOut"
    }}>
    <Carousel/>
      <Container ref={ref}>
        <motion.h2  
        animate={animation}  className=' linea home-title home-container justify-content-center'>Nuestro Café</motion.h2>
        <div className='pt-5 pb-5 home-container img-fluid justify-content-around'>
          <motion.img animate={animation}  className='img-home px-2 img-fluid d-flex' src={cafe} alt="cafe recien servido"></motion.img>
          <motion.div animate={animation}  className='mx-3 -3'>
            <p  className='text-home'>Para preparar un buen café en casa tenés que prestar atención a cosas sencillas que van a mejorar mucho el sabor de tu bebida. En este artículo te comparto 10 pasos fáciles para preparar un buen café en casa. Durante mucho tiempo,  yo fui una de esas personas a las que les gusta tomar café en una cafetería, pero que evitaba beberlo en casa porque no sabía como hacer para preparar algo decente. En la medida que fui desarrollando mi conocimiento cafetero me di cuenta de lo equivocado que estaba.</p>
            <p className='text-home'>El café que preparamos en casa, (con cualquier cafetera) puede ser diferente y más rico que lo que ofrece la mayoría de las cafeterías. Para preparar un buen café no hay que comprarse una cafetera cara, cualquiera que tengas en tu casa va a producir una taza decente. No olvides que los mejores cafés del mundo, que generalmente son comprados por japoneses o americanos, se disfrutan usando un dripper y un filtro sencillo de papel. ¿Y entonces? ¿Qué tenés que hacer para preparar un buen café?</p>
            <motion.div whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 50 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
            <Link to="/productos" className='btn button d-flex justify-content-center'>
              <motion.button  className='btn'>Ir a la tienda</motion.button>
            </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  )
}

export default Home