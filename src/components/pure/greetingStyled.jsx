
import React, {useState} from 'react';
//definiendo estilos encontrados:


// ? estilo para usuario logueado
const loggedStyle = {
    color: 'white'
};

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const Greetingstyled = (props) => {

    //generamos un estado para el componente
    // y asi controlar si el usuario esta o no logueado
    const [logged, setLogged] = useState(false)
    // const greetingUser = () => (<p>hola, {props.name}</p>)
    // const pleaseLogin = () => (<p>please login</p>);

    return (
        <div style={logged ? loggedStyle : unloggedStyle }>
        {/* otra alternativa para manejar con ternarios */}
            { logged ? (<p>hola, {props.name}</p>) : (<p>please login </p>)}
            {/* { logged ? greetingUser: pleaseLogin} */}

            <button onClick={()=>{
                console.log('boton pulsado')
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default Greetingstyled;
