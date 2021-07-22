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
    // Router could be it's own component but I'm trying to save time, sorry
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/post/:id">
            <Post />
          </Route>
          <Route path="/posts">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
