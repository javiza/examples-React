import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importamos la hoja de estilos de task.scss

import "./../../styles/task.scss";


const TaskComponent = ({ task }) => {

    //useEffect cuando una tarea va a cambiar 
    useEffect(() => {
        console.log('created Task')
        return () => {
            console.log(`Tasks: ${task.name} is going to unmount`);
        };
    }, [task]);
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span >{task.description}</span>

            </td>
            <td className='align-middle'>
                {/* TODO: sustituir por un badge */}
                <span >{task.level}</span>

            </td>
            <td className='align-middle'>
                {/* TODO: sustituir por iconos */}
                {task.completed ?
                    (<i className='bi-toggle-on' style={{color: 'green', fontWeight: 'bold'}}></i>) : (<i className='bi-toggle-off' style={{color: 'grey', fontWeight: 'bold'}}></i>)
                }

                <span >{task.completed ? 'Completed' : 'Pending'}</span>

            </td>

        </tr>


        // <div>
        //     <h2 className=''>
        //         Nombre: { task.name }
        //     </h2>
        //     <h3>
        //         Descripción: { task.description }
        //     </h3>
        //     <h4>
        //         Level: { task.level }
        //     </h4>
        //     <h5>
        //         This task is: { task.completed ? 'COMPLETED':'PENDING' }
        //     </h5>

        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
