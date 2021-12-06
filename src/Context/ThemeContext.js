import react from "react";

export const temas = {
    dark:{
        color: "white",
        background:"#30166d"
    },
    light:{
        color: "#04010a",
        background:"#755ab4"
    }
}

const ThemeContext = react.createContext(temas.dark)

export default ThemeContext;