import React from 'react';
import { useHistory} from 'react-router-dom'
const ProfilePage = ({user}) => {
 
    const history = useHistory();
 
    const navigate = (path) => {
        history.push(path);
    }
    const goBack = ()=>{
        history.goBack();
    }

  
    return (
        <div>
            <h1>
                your profile
            </h1>
            <button onClick={()=> navigate('/task')}>
                    tasks
                </button>
            <button onClick={goBack}>
                    atras
                </button>
        </div>
    );
}

export default ProfilePage;
