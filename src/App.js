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
  console.log(window.location.href);
  return (
    // Router could be it's own component but I'm trying to save time, sorry
    <Router>
      <GlobalStyle />
      <div>
        <Switch>
          <Route exact path="/yuppers/post/:id">
            <Post />
          </Route>
          <Route path="/yuppers/posts">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/yuppers/posts" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
