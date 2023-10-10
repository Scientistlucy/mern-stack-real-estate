import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Signin from './pages/signin';
import SignUp from './pages/SignUp';
import About from './pages/about';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={Signin} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
