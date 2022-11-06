/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componete funcional
 */
//rcc 

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}
//rfc se usa useEffect en un componente funcional

export const DidupdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}
