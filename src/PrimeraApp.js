import React from "react";
import PropTypes from "prop-types";

// en lugar de usar props en el argumento del componente
// se obtienen los valores por desestructuracion de tipo objeto
const PrimeraApp = ( {saludo, subtitulo} ) => {

    /* const persona = {
        nombre: 'Tino',
        edad : 37
    } */

    return (
        <>
            <h1> {saludo} </h1>
            <p> {subtitulo} </p>
            {/* <pre>{JSON.stringify(persona, null, 2)}</pre> */}
        </>
        
    );
}

// aqui se definen los propTypes, esto es, el formato de los valores del componente que se deban recibir
PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired
}

// aqui se definen los valores por defecto
PrimeraApp.defaultProps = {
    subtitulo : 'Mi primera app'
}

export default PrimeraApp;
