import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import Taskform from "../pure/forms/taskform";
import TaskComponent from "../pure/task";
import "./../../styles/task.scss";

const TaskListComponent = () => {



  
  // nuestros

  const defaultTask1 = new Task(
    "Example1",
    "description1",
    true,
    LEVELS.NORMAL
  );
    //aqui va un bucle para poder pintar varias cosas en el html

  const defaultTask2 = new Task(
    "Example2",
    "description2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "description3",
    false,
    LEVELS.BLOCKING
  );



  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);
function completeTask(task) {
  console.log('complete this Task', task);
//actualizar estado para tarea completada y cambie el icono a un c
  const index = tasks.indexOf(task);
  const tempTasks = [...tasks];
  tempTasks[index].completed = !tempTasks[index].completed
  //we update the state of the component with the new list of tasks and it will update the
  //iteration of the tasks in order to show the task update
  setTasks(tempTasks);
} 
function deleteTask(task){
  console.log('delete this Task', task);
  const index = tasks.indexOf(task);
  const tempTasks = [...tasks];
  tempTasks.splice(index,1);
  setTasks(tempTasks);

}
function addTask(task) {
  console.log('complete this Task', task);
  const index = tasks.indexOf(task);
  const tempTasks = [...tasks];
  tempTasks.push(task);
  setTasks(tempTasks);
  
}
  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* card header(title) */}
          <div className="card-header p-3">
            <h5>your task</h5>
          </div>
          {/* card body(content) style agrega estilo, otra propiedad data mdb... para haga un scroll */}
          <div className="card-body" data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: 400 }}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: itererar una lista de tareas */}
                {/* recibe tantos td como tareas hay */}
                {tasks.map((task, index) => {
                  return (
                  <TaskComponent 
                  key={index}
                   task={task} 
                   complete={completeTask} remove={deleteTask}></TaskComponent>
                  )
                })}

              </tbody>
            </table>

          </div>
        
        </div>
      </div>
      <Taskform add={addTask}></Taskform>
    </div>
  );
};

export default TaskListComponent;
