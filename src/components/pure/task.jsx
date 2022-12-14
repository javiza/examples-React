import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from "../../models/levels.enum";
//importamos la hoja de estilos de task.scss

import "./../../styles/task.scss";


const TaskComponent = ({ task, complete, remove}) => {

    //useEffect cuando una tarea va a cambiar 
    useEffect(() => {
        console.log('created Task')
        return () => {
            console.log(`Tasks: ${task.name} is going to unmount`);
        };
    }, [task]);

    // function thats return a badge
    // depending on the level of the task

    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                
               return (<h6 className='mb-0'>
               <span className='badge bg-primary'>
               { task.level}
               </span>

               </h6>)
          case LEVELS.URGENT:
                
            return (<h6 className='mb-0'>
            <span className='badge bg-warning'>
            { task.level
            }</span>

            </h6>)
            case LEVELS.BLOCKING:
                
                return (<h6 className='mb-0'>
                <span className='badge bg-danger'>
                { task.level
                }</span>
    
                </h6>)
            default:
                break;
        }

    }
    //function that returns icon 
    function taskIconCompleted() {
        if (task.completed) {
            return (
                <i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
            
        }else{
            return ( <i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
        
    }
const taskCompleted = {
    backgroundColor: 'blue',
    color: 'gray',
    fontWeight: 'bold',
    textDecoration: 'line-through'
}
const taskPending = {
   
    color: 'tomato',
    fontWeight: 'bold',

}

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted: taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span >{task.description}</span>

            </td>
            <td className='align-middle'>
                {/* TODO: sustituir por un badge */}
                {/* execution of function to return badge element*/}
              {taskLevelBadge()}

            </td>
            <td className='align-middle'>
                {/* TODO: sustituir por iconos */}
                {/* {task.completed ?
                    (<i className='bi-toggle-on' style={{color: 'green', fontWeight: 'bold'}}></i>)
                    : (<i className='bi-toggle-off' style={{color: 'grey', fontWeight: 'bold'}}></i>)
                }
                */}
                {/* <span >{task.completed ? 'Completed' : 'Pending'}</span> */}
                {/* function for depuration */}
                {taskIconCompleted()}
                {/* <i className='bi-trash task-action' onClick={() => remove(task)} style={{color: 'tomato', fontWeight: 'bold'}}></i> */}
                <i className='bi-trash task-action' style={{color: 'tomato'}}  onClick={() => remove(task)} ></i>

            </td>

        </tr>


    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
