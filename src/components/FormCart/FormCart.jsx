import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { GlobalContext } from '../../context/CartContext';
import db from '../../services'
import { collection, addDoc} from "firebase/firestore"

function BasicExample() {

    const {precioFinal, carrito} = useContext(GlobalContext)

    const [ formulario, setFormulario] = useState({
        buyer:{
            nombre:"",
            apellido:"",
            email:"",
            telefono:"",
        },
        total:{precioFinal},
        compra: {carrito}
    })

    const { buyer: {email, nombre, apellido,telefono},} = formulario

    const handleChange = (e)=>{
        const { name, value } = e.target
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value
            }
        })
    }

    const setInFirebase =  async (formulario)=>{
        try {
            const col = collection(db, "ordenes")
            const generarOrden = await addDoc(col, formulario)

        } catch (error) {
            console.log(error)
        }
    }

    return (
    <Form className="col-6 p-5 row d-flex justify-content-center ">
        <h2>Datos de Compra</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control onChange={handleChange} value={nombre} name="nombre" type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellido</Form.Label>
            <Form.Control onChange={handleChange} value={apellido} name="apellido" type="text" placeholder="Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleChange} value={email} name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control onChange={handleChange} value={telefono} name="telefono" type="number" placeholder="Teléfono" />
        </Form.Group>
        <Form.Text className="fs-2">
          Precio: ${precioFinal}
        </Form.Text>

        <button onClick={()=>setInFirebase(formulario)} className="button btn" type="button">
            Terminar Compra
        </button>
    </Form>
  );
}

export default BasicExample;