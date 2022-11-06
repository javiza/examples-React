/**
 * Ejemplo de uso del método
 * de ciclo de vida en componete clase y el hook de ciclo de vida
 * en componente funcional
 */
 //de tipo clase RCC y otro de tipo funcion RFC
import React, { Component, useEffect } from 'react';

export class Didmount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (rederice)');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

//de tipo funcion

export const DidmountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (rederice)');
    }, [])//vacia para que se reinicie una vez siempre, cuando tiene propiedades se hace solo una vez

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}


