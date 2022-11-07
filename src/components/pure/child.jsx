// rfc componente funcional
// eventos desde un componente hijo que provee al padre
//useRef es un hook que nos permite referenciar eventos
import React, {useRef} from 'react';


const Child = ({name, send, update}) => { //parametros recibidos del padre
 //dentro de child
    const messageRef = useRef('')
    const nameRef = useRef('')

    function botonUno () {
        alert('hola soy el boton 1')
    }

function pulsarBoton(){
const text = messageRef.current.value;
    alert(`Text in input: ${text}`)
}
function pressButtonParams(text){
    //  text = 'cumpa aqui estoy';
    alert(`text: ${text}`);
}

//ingreso de nombre
function submitName(e) {
    e.preventDefault(); //previene que se refresque la pagina lo hace por defecto
    update(nameRef.current.value);//se lo mandamos al padre
}
    return (
        <div style={{background: 'green'}}>
            <p onMouseOver={() => console.log('on mouse over')}>hello, {name}</p>
            <button onClick={() => botonUno() }>boton 1</button>
        
            <button onClick={pulsarBoton}>boton 2</button>
            {/* <button onClick={pressButtonParams}>boton 3</button> */}
            {/* para ingresar de forma directa como parametros y 
            para que no arroje error debe ser ingresado dentro de una funciuon anonima
             */}
            <button onClick={() => pressButtonParams('hola ahora estoy en una funcion anonima')}>boton 3</button>
             <input placeholder='send a text to your father'
              onFocus={() =>console.log('input focused')}
                onChange={(e) => console.log('input changed:', e.target.value)}
                onCopy={() => console.log('copied text from input')}
// value ='value ddefault'   
            
                ref = {messageRef}
             />
{/* actualizar nombre html */}
             
            <button onClick={() => send(messageRef.current.value)} >send message</button>
             <div style={{margingTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New name'/>
                    <button type='submit'>update</button>
                </form>
             </div>
        </div>
    );
}

export default Child;
