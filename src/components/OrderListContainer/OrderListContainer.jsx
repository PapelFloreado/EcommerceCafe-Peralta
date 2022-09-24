import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Container, Form, Button } from 'react-bootstrap'
import { useAnimation, motion } from 'framer-motion'
import { collection, getDocs } from "firebase/firestore";
import OrderDetail from '../OrderDetail/OrderDetail';
import db from '../../services'
import "./OrderListContainer.css"
import SpinnerLoad from '../SpinnerLoad/SpinnerLoad';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const Ordenes = () => {


    const {ref, inView} = useInView({threshold:0.3})
    const animation = useAnimation()
    const [loading, setLoading] = useState(false)
    const MySwal = withReactContent(Swal)
    

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
    

    const [order, setOrder] = useState([])

    const [formulario, setFormulario] = useState({
            input:{
                id:""}
    })

    const {input:{id}} = formulario

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormulario({
            ...formulario,
            input:{
                ...formulario.input,
                [name]:value
            }
        }
           
        )
    }

    
    const searchId = async(formulario)=>{
        setLoading(true)
        const {input:{id}} = formulario
        const q = collection(db, "ordenes")
        const querySnapshot = await getDocs(q);
        const res = querySnapshot.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
        const res2 = res.find(el=>el.id === id)
        if(res2 === undefined || res2 === "" || formulario === ""){
          MySwal.fire({
            title: <strong>Error!</strong>,
            html: <i>Te faltan completar los datos</i>,
            icon: 'error'})
            setLoading(false)
        }else{

        setOrder(res2)
        setLoading(false)  
        }
        
    }

    return (
    <Container ref={ref} animate={animation} className='ordenes row d-flex justify-content-center align-items-center'>
        <motion.div animate={animation} className='pt-5 col-8'>
            <h2 className='fs-1'>Para buscar datos sobre su orden ingrese su ID</h2>
            <Form.Group className="mb-3 pt-3" controlId="exampleForm.ControlInput1">
                <Form.Control onChange={handleChange} value={id} name="id" type="text" placeholder="número de ID" required />
            </Form.Group>
            <Button  onClick={()=>searchId(formulario)} className="button btn  col-12" type='button'>Buscar</Button>
        </motion.div>
        <div className='pb-5 col-8 justify-content-center align-items-center'>
            {
                order.length === 0 ? (<div/>) : (loading === true) ? (<SpinnerLoad/>) : (<OrderDetail order={order}/>)
            }
        </div>
          
    </Container>
  )
}

export default Ordenes