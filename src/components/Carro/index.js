import { useState, useEffect} from 'react'
import { Burbuja } from '../Burbuja';

import swal from 'sweetalert';

import {Container, ShowCart, 
        ContainerListArticles, ListArticles, 
        Article, DeleteArticle,
        CalculationsCart, ProductName,
        ProductAmount
} 
from "./styles"

export const Carro = ({ cantidad, productos }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const [nuevoProducto, setNuevoProducto] = useState(productos)

    // useffect utilizado para mostrar un mensaje de inicio cuando el carrito este vacio

    useEffect(()=>{
        if (productos.length === 0) {
            swal({
                title: 'Bienvenido',
                text:"No olvides agregar tus articulos al carrito :)",
                icon:""
            })
            
        }
    },[]);
    

    const eliminarArticulo = (id) => {
        swal({
            title: "Eliminar Articulo",
            text:"Estas Seguro de eliminar este articulo",
            icon:"warning",
            buttons:["No","Si"],
        }).then(respuesta =>{
            if(respuesta){
                if (productos.find(x => x.id === id)) {
                    const carritoCopia = productos.forEach(function(producto, index, object) {
                        if(producto.id === id){
                            object.splice(index, 1);
                            return productos
                        }
                        
                       cantidad = productos.length
                        setMostrarCarro({...cantidad})
                        console.log(cantidad)

                    });
                    productos = carritoCopia
                    setNuevoProducto({...productos})
                    cantidad = nuevoProducto.length
                  
                }
                setNuevoProducto({...productos})
                swal({text:"El articulo fue eliminado con exito",
                icon:"success", timer:"2000"})  
                
            }
        })
    }

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <Container>
            {cantidad > 0 && <Burbuja cantidad={cantidad} productoCarrito ={productos}/>}
            <ShowCart onClick={handleMostrarCarro}>
                Carro
            </ShowCart>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ContainerListArticles >
                        <ListArticles>
                            {
                                productos.map(x => {
                                    return (
                                        <Article>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <ProductName id = {x.id}>
                                                <DeleteArticle onClick={() => {
                                                         eliminarArticulo(x.id);
                                                     }}  > X </DeleteArticle>
                                                {x.nombre}
                                            </ProductName>
                                            <ProductAmount>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </ProductAmount>
                                        </Article>
                                    )
                                })
                            }
                                <CalculationsCart>
                                    <strong>Sub total</strong>
                                    <strong>{subTotal.toLocaleString()}</strong>
                                </CalculationsCart>
                                <CalculationsCart>
                                    <strong>Impuesto</strong>
                                    <strong>{impto.toLocaleString()}</strong>
                                </CalculationsCart>
                                <CalculationsCart>
                                    <strong>Total a pagar</strong>
                                    <strong>{totalPagar.toLocaleString()}</strong>
                                </CalculationsCart>
                        </ListArticles>
                    </ContainerListArticles>
            }
        </Container>

    )
}