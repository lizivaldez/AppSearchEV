
import React, { Component } from 'react';
import Buscador from "./componentes/Buscador.js";
import Resultado from './componentes/Resultado.js';

class  App extends Component {

  state = { 
    termino : '',
    imagenes : []
   }
  
   consultarApi = () => { 
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=28082441-119722f702f78c812e5e14cbf&q=${termino}`;
   // console.log(url);
   fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes : resultado.hits }) )
   }


  datosBusqueda = (termino) => { 
    this.setState({ 
      termino
    }, () => { 
      this.consultarApi();
    })
   }

  render() {
  return (
    <div className="app container">
       <div className="jumbotrom">
        <p className="lead text-center">Elizabeth Valdez APP</p>
          <Buscador
          datosBusqueda={this.datosBusqueda}
          />
       </div>
       <Resultado
       imagenes={this.state.imagenes}
       />
    </div>
  );
}
}

export default App;

