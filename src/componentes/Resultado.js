import React, { Component } from 'react';
import Imagen from './Imagen.js';

class Resultado extends Component {
    mostrarImagenes = () =>  {
        const imagenes = this.props.imagenes;
//sirve para cunado esté vacío el state no se ejecute el código
        if(imagenes.length === 0) return null;
        console.log(imagenes);


       return(
            <React.Fragment>
                <div className="col-12 p-5 row"> 
                {imagenes.map(imagen => (
                        <Imagen
                            key={imagen.id}
                           imagen={imagen}
                        /> 
                 ) ) }
                </div>
            </React.Fragment>
       )
    }  
    
    render() { 
        return( 
            //aquì devuelve las imagenes y como el render està vacío se adiciona un react 
            //fragment
            <React.Fragment> 
                { this.mostrarImagenes() } 
            </React.Fragment> 
        );
    }
}

export default Resultado;