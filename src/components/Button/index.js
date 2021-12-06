// import styles from './estilos'

import {ButtonAgregar} from "./styles"

export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <ButtonAgregar onClick={() => agregarAlCarro(prod)}>
            {children
        }</ButtonAgregar>
    )
}