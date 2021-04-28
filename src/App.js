import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <NavMenu />

      <Switch>
        <Route path='/about'>
          <About />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
