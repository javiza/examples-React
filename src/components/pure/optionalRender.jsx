import React, {useState} from 'react';

let red = 50;
let green = 200;
let blue = 100;

//? estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color:'white',
    fontWeight:'bold'
}
//? estilo para usuario No logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color:'white',
    fontWeight:'bold'
}

// Login / Logout buttons

// const LoginButton = ({loginAction}) =>{
//     return( 
//         <button style={loggedStyle} onClick={loginAction}>Login</button>
//     );
// }
// const LogoutButton = ({logoutAction}) =>{
//     return( 
//         <button style={unloggedStyle} onClick={logoutAction}>Logout</button>
//     );
// }

// otra forma de recibir el style es lpor props
//ej:

const LoginButton = ({loginAction, propStyle}) =>{
    return( 
        <button style={propStyle} onClick={loginAction}>Login</button>
    );
}
const LogoutButton = ({logoutAction, propStyle}) =>{
    return( 
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    );
}

//
//?(expresion true) && elemento => se renderiza la expresión
//? (expresion false) && expresion => no se renderiza la expresión



const OptionalRender = () => {
    const [access, setAccess]  = useState(true);

    const[nMessage, setNmessage] =  useState(0);
 
    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;
  
    if(access){
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}>Logout</LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}>Login</LoginButton>
    }

    // unread messages
    let addMessages = () => {
    setNmessage(nMessage +1 )
    } 
//

    return (
        <div>
        {/* --Optional Button */}
        { optionalButton }
        {/* --n messages unread */}
        {/* {nMessage > 0 && nMessage === 1 && <p> you have {nMessage} new messages...</p>}
        {nMessage > 1 && <p> you have {nMessage} new messages...</p>}
        {nMessage === 0 && <p> there are no new messages </p>} */}

        {/* Ternay operator */}
        {access ? (
            <div>
                { nMessage > 0 ? 
         <p> you have {nMessage} new message{nMessage > 1 ? 's': null}...</p>: 
         <p> there are no new messages </p>
        
         }
         <button onClick={addMessages}>{nMessage === 0 ? 'Add your first message' : 'add new messages' }</button>

        </div>) : null}
        </div>
    );
}



export default OptionalRender;
