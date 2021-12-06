import React from 'react'; // se utiliza para el lenguaje jsx
import ReactDOM from 'react-dom'; // este es para mostrarlo
import App from './App';
import reportWebVitals from './reportWebVitals';

// la etiqueta p tiene atributos
// {} = clases si no tiene se pone null
//  atributo id {className: 'id1'}
// const p1 = React.createElement('p', {className: 'id1'}, 'contenido') // creando etiqueta p html
// const p2 = <p className = "id1"><span> Hola Mundo </span></p> // lo mismo solo que con jsx
// const P3 = () => <p> Hola Mundo</p>
// los componentes tiene atributos
// el estandar es con la primera letra mayuscula para los componentes
// const Div = () => <div></div>


//  Este ReactDOM necesita el que y el donde?
ReactDOM.render(
  // lenguaje jsx = "azucar asintactica" un codigo que genera otro
  // App sera nuestro componente padre
  <React.StrictMode> 
    <App />
  </React.StrictMode>, // esto es el que
  //  p1, <= si coloco eso se impre el contenido de ello
  // <p3> Hello world </p3> se crea un componente 
  document.getElementById('root') // este es el donde
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
