//este archivo es para cuando no se encuentre la pagina
//componente funcional rfc
import React from 'react';
import {useHistory} from 'react-router-dom'

const NotFoundPage = () => {
    const history = useHistory();
    const navigate = (path) => {
        history.push(path);
    }
    return (
        <div>
            <h2>404 - Pge not found...</h2>
            <button onClick={()=> navigate('/')}>
                    go to home
                </button>
        </div>
    );
}

export default NotFoundPage;
