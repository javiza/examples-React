
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProfilePage from './pages/profiles/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

const AppRoutingOne = () => {
   return (
     <Router>
      <div>
        <aside>
          <Link to='/'>||Home|</Link>
          <Link to='/about'>About</Link>
          <Link to='/faqs'>|Faqs</Link>
          <Link to='/una404'>|ruta inexistente||</Link>
        </aside>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route  path='/(about|faqs)' component={AboutPage}/>
            <Route  path='/profile' component={ProfilePage}/>
            <Route path='/task' component={TaskPage}/>
            <Route path='/task:id' component={TaskDetailPage}/>
            {/* not found 404 */}
            <Route component={NotFoundPage}/>
          </Switch>
        </main>
      </div>
     </Router>
   )
}
export default AppRoutingOne;