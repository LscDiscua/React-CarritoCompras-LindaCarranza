import { Carro } from '../Carro';
// import { useEffect } from 'react';
// // import styles from './estilos';


import {ContainerNav} from "./styles"

export const Navbar = ({ cantidad, productos }) => {


    return (
        <ContainerNav>
            <p>logo</p>
            <Carro cantidad={cantidad} productos={productos} />
        </ContainerNav>
    )
}