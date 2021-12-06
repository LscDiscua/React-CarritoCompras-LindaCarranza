// import { useState } from "react";
// import styles from "./estilos";
import { Button } from "../Button";


import {Container, Image, ProductName,Price} from "./styles";

export const Articulo = ({prod,agregarAlCarro,tema}) =>{
    //  esta es otra forma
    // const {nombre, precio, imagen} = props

    //hooks
    // const [valor, setValor] = useState(0)


    // const handleClick = () =>{
    //     setValor(valor + 1)
    // }

    //propiedas childlen es para que el hijo tenga todas las propiedades del padre
    // ejemplo: 
    // <p>SOy un parrafo</p>
    // el texto es el hijo
    return (
        <Container tema={tema}>
            <Image imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
            <Price>${prod.precio.toLocaleString()}</Price>
            <Button prod={prod} agregarAlCarro={agregarAlCarro}>Add To Cart</Button>
        </Container>
    )
}



/**
 * article{contenedor}  Container
 * div{imagen}          Image
 * h4{nombre producto}  Title
 * p{precio producto}   Price
 * 
 */

//inlie las imagenes son inline