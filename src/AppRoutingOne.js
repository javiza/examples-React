import { useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import ProfilePage from './pages/profiles/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne  () {
  let logged =  false;

  let tasklist = [
    {
      id: 1,
      name: 'Task 1',
      description: 'my first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'my second Task'
    }
  ]

useEffect(() => {
  logged =  localStorage.getItem('credentials');//conecta las credenciales guardadas en el local storage
  console.log('use logged?', logged)//con useffect  controlamos que se use cada vez
}, []);//con corchete para que se ejecute cada vez


   return (
     <Router>
      <div>
        <aside>
          <Link to='/'>||Home|</Link>
          <Link to='/about'>About</Link>
          <Link to='/faqs'>|Faqs</Link>
          <Link to='/task/1'>|task 1||</Link>
          <Link to='/task/2'>|task 2||</Link>
          <Link to='/una404'>|ruta inexistente||</Link>
          <Link to='/login'>|Login||</Link>


        </aside>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/online-state' component={StatePage}/>
            <Route path='/login' component={LoginPage}>
          {    logged ?
            () => {
                  alert('you must be logged in. Redirecting to Home...')
                  return (<Redirect to='/' />)//entre parentesis ñporque es un jsx
                }
                //
              :
              () => {
                  return (<LoginPage></LoginPage>)//entre parentesis ñporque es un jsx
                }
                //
              }
            </Route>
            <Route  path='/(about|faqs)' component={AboutPage}/>
            <Route  path='/profile' component={ProfilePage}>
              {
                logged ? 
                <ProfilePage/>
                : 
                //para verificar que se esta redirigiendo
                () => {
                  alert('you must be logged in. Redirecting to login...')
                  return (<Redirect to='/login' />)//entre parentesis ñporque es un jsx
                }
                //
            
              }

            </Route>
            <Route path='/tasks' component={TaskPage}/>
            <Route exact path='/task/:id' render= {
              ({match}) => (<TaskDetailPage task={tasklist[match.params.id-1]}/>)}>

            </Route>
            {/* not found 404 */}
            <Route component={NotFoundPage}/>
          </Switch>
        </main>
      </div>
     </Router>
   )
}
export default AppRoutingOne;