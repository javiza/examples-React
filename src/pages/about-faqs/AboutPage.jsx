import React from "react";

import {useLocation, useHistory} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    const history = useHistory();
    console.log('we are in route: ', location.pathname);//
    const navigate = (path) => {
        history.push(path);
    }
    const goBack = ()=>{
        history.goBack();
    }

    const goForward = ()=>{
        history.goForward();
    }
    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={()=> navigate('/')}>
                    go to home
                </button>
                <button onClick={goBack}>
                    atras
                </button>
                <button onClick={goForward}>
                    adelante
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
