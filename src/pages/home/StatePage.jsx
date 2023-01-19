import React from 'react';
import {useLocation} from 'react-router-dom';
const StatePage = () => {

    const location = useLocation();

    console.log('query params: ', location.search);//query params sent

    return (
        <div>
            <h1>State: {location.state.online ? 'the user is online' : 'the iser is offline '}</h1>
        </div>
    );
}

export default StatePage;
