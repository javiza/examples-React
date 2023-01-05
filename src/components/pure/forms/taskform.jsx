import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';


 //formularario para crear una nueva tarea
const Taskform = ({add, lenght}) => {
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL);
    
    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }
    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }
    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }
    return (
        //formulario basico
         
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text'className='form-control form-control-lg' required autofocus placeholder='task Name'/>
                <input ref={descriptionRef} id='inputDescription' type='text'className='form-control form-control-lg' required placeholder='task Description'/>
                {/* <labe htmlFor='selectLevel' className='sr-only'>Priority</labe> */}
                <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                   <option style={normalStyle} value={LEVELS.NORMAL}>
                    normal
                   </option>
                   <option style={urgentStyle} value={LEVELS.URGENT}>
                    urgente
                   </option>
                   <option style={blockingStyle} value={LEVELS.BLOCKING}>
                    bloqueado
                   </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
            {lenght > 0 ? 'add new task' : 'create new task'}</button>

            </div>
          
        </form>
    );
}
Taskform.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
