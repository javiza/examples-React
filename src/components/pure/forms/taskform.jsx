import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';
 //formularario para crear una nueva tarea
const Taskform = ({add}) => {
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
    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text'className='form-control form-control-lg' required autofocus placeholder='task Name'/>
                <input ref={descriptionRef} id='inputDescription' type='text'className='form-control form-control-lg' required placeholder='task Description'/>
                <labe htmlFor='selectLevel' className='sr-only'>Priority</labe>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                   <option value={LEVELS.NORMAL}>
                    normal
                   </option>
                   <option value={LEVELS.URGENT}>
                    urgente
                   </option>
                   <option value={LEVELS.BLOCKING}>
                    bloqueado
                   </option>
                </select>

            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>add</button>
        </form>
    );
}
Taskform.protoTypes = {
    add: PropTypes.func.isRequired
}

export default Taskform;
