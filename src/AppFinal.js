import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import * as React from 'react';
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage'
import DashBoardPage from "./pages/dashboard/DashBoard";
function AppFinal  () {
  
   //TODO: change to value from sessionStorage(or something dinamic)
let loggedIn = true;

   return (
    <div>
       <Router>
         {/* route switch */}
         <Switch>
         {/* redirections to protect our routes */}

         <Route exact path='/'>
            {
               loggedIn ?

               (<Redirect from='/' to='/dashboard' />)
               :
               (<Redirect from='/' to='/login' />)
            }
         </Route>
         {/* login route */}
         <Route exact path='/login' component={LoginPage}/>
         {/* dashboard route */}
         <Route exact path='/dashboard'>
            {
               loggedIn ?
              ( <DashBoardPage/>)
               :
              ( <Redirect from='/' to='/login' />)
            }
         </Route>
         <Route component={NotFoundPage}/>
         </Switch>
       </Router>
    </div>
   );
}
export default AppFinal;