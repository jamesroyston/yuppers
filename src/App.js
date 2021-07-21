import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Post from './pages/Post';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/post/:id">
            <Post />
          </Route>
          <Route path="/posts">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
