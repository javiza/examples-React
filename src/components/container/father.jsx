import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {
    const [name, setName] = useState('Martin')
//mensaje 
    function showMessage(text){
        alert(`message received: ${text}`)
    }
    //actualizar nombre
    function updateName (newName){
        setName(newName)
    }
    return (
        <div style={{background: 'tomato', color: 'black', padding: '10px'}}>
          <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
