import React from 'react';
import {useLocation, useHistory} from 'react-router-dom'




const HomePage = () => {
    const location = useLocation();
     const history = useHistory();

     console.log('we are in route: ', location.pathname);//
    const navigate = (path) => {
        history.push(path);
    }
 
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={()=> navigate('/profile')}>
                    go to profile
                </button>
               
            </div>
        </div>
    );
}

export default HomePage;
