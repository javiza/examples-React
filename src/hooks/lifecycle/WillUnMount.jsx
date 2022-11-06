/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */


import React, { Component, useEffect } from 'react'

//RCC componente de tipo clase

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        )
    }
}

//rfc componente de tipo funcional, siempre con useEffect
export const WillunmountHook = () => {

    useEffect(() => {
        // aqui no ponemos nada
        return () => {
            //se pone todo en el return
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>
                WillUnmount
            </h1>
        </div>
    );
}
//


