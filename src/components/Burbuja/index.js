import {BurbujaCantidad} from "./styles"

export const Burbuja = ({ cantidad, productoCarrito }) => {

    return (
        <BurbujaCantidad>
            {cantidad > 9 ? '9+' : cantidad}
        </BurbujaCantidad>
    )   
}