// import logo from './logo.svg';
import './App.css';
import Father from './components/container/father';
// import Greeting from './components/pure/greeting';
// import Greetingf from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
// import GreetingStyled from './components/pure/greetingStyled';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3'
// import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name={"Martín"}></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <Greetingf name="Martín"></Greetingf> */}
        {/* Componente de Listado de Tareas */}
      
        {/* Ejemplos de uso de HOOKS */}
         {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Martín">
          {/* Todo loq ue hay aquí, es tratado como props.children 
          <h3>
            Contenido del props.children
          </h3> 
        </Ejemplo4>*/}
        {/* <GreetingStyled name="Martin"></GreetingStyled> */}
       {/* <TaskListComponent></TaskListComponent>  */}
       {/* gestion de eventos */}
       <Father></Father>
        
      </header>
    </div>
  );
}

export default App;
