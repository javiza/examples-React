import React, {useEffect} from 'react';
//componente funcional RFC
//contiene todos los ciclos de vida
//solo de debe tener 1 por cada componente
// aqui va toda la logica(if else, for)

const Allcycles = () => {

    useEffect(() => {
        console.log('Componente creado')
        // se establesco un intervalo
        const intervalID = setInterval(() => {
            //aqui adentro se ejecuta
            document.title = `${new Date()}`//cambiara el nombre de la pestaña a cada rato
            console.log('Actualización del componente')
        }, 1000);//cada segundo se actualiza el componente

        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(intervalID);//aqui se borra el intervalo que hemos creado
        }
    }, []);


    return (
        <div>
            
        </div>
    );
}

export default Allcycles;
