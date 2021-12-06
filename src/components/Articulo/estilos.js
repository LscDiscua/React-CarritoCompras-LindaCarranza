const styles = {
    article:{
        border:'1px solid #b3b3b3',
        borderRadius: 5,
        boxShadow:'5px 5px 5px rgba(0, 0, 0, 0.1)',
        width:'450',
        padding:20,
        boxSizing:'border-box', // esto hace que se mantega el tama;o del width
        marginBottom: 30,
        textAlign:"center"
    },
    img:{
        // width: '100%',
        height: '100%'
    },
    imgWrapper:{
        border: '1px solid #000',
        height: 250
    },
    imgWrapperImg: (img)=>{ // esta es una funcion
        
        return{
            backgroundImage:   `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPossition: 'center',
            backgroundSize: 'contain',
            // border: '1px solid #000',
            height: 250,
        }
    },
    h4:{
        fontSize: '22pt',
        marginBottom: 0
    },
    p:{
        fontSize: '18',
        color:'#4c4c4c',
        marginTop: 4
    },
    

    
}

export default styles;