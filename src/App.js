
import { Fragment,useState,useEffect,useRef, useContext } from "react";
import { Articulos } from "./components/Articulos";
import {Navbar} from "./components/Navbar";


import ThemeContext,{temas} from './Context/ThemeContext'

// Base de datos

const informacion = {
  articulos: [
    {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
    {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
    {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
    {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
    {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'}
  ],
  carrito: [
    // {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg', cantidad: 2}
  ]
}


function App() {

  const [data, setData] = useState(informacion);
  
  const [tema, setTema] = useState(temas.dark);

  // useRef utilizado para colocar el valor inicial de los valores del carrito

  const cantidad = useRef(0)
  
  const agregarAlCarro = (producto) => {
    // 1- Verificar si el producto clickeado ya està en el carrito
    if (data.carrito.find(x => x.id === producto.id)) {
      // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }

    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
    
  }
  
  // useEffect utilizado para los cambios de la cantidad de articulos en el carrito
  useEffect(()=>{
    cantidad.current = data.carrito.reduce((acum, actual)=> acum + actual.cantidad, 1)
    
  })

  const cambiotema = () => tema === temas.dark ? setTema(temas.light) : setTema(temas.dark);
 

  return (
      <ThemeContext.Provider value={temas}>
        <Fragment> 
            <Navbar cantidad = {cantidad.current} productos = {data.carrito}/>
            <Articulos agregarAlCarro = {agregarAlCarro} data={data} cambiotema={cambiotema} />
        </Fragment>
      </ThemeContext.Provider>

  );
}
// un componnete puede encapsular otro componentes
export default App;
