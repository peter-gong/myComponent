import { hot } from 'react-hot-loader/root';
import React from 'react';
import './index.less';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import loadable from '@loadable/component';

const Loading = () => {
  return <div>Loading...</div>;
};

const Home = loadable(() => import('@pages/Home'), {
  fallback: <Loading />,
});
// const Users = loadable(() => import('@pages/Users'), {
//   fallback: <Loading />,
// });

const App = () => {
  return (
    <div>
      <h1 className='css'>Hello CSS</h1>
      <h1 className='less'>Hello Less</h1>
      <h1 className='scss'>Hello SCSS</h1>
      return{' '}
      <>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                {/* <li>
                  <Link to='/users'>Users</Link>
                </li> */}
                {/* <li>
                  <Link to='/users'>Users</Link>
                </li> */}
              </ul>
            </nav>
            <main>
              <input />
              <Switch>
                <Route path='/' exact>
                  <Home />
                </Route>
                {/* <Route path='/users'>
                  <Users />
                </Route> */}
              </Switch>
            </main>
          </div>
        </Router>
      </>
    </div>
  );
};

export default hot(App);
