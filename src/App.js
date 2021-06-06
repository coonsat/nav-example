import './css/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//App components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Teachers from './components/Teachers';
import Feature from './components/Feature';
import Courses from './components/Courses';
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        {/* Switch only renders the first Route that matches the URL */}
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* Special case using a render attribute */}
          {/* Use this when you want to pass through props */}
          {/* This is perhaps redundant when using webhooks or redux */}
          <Route path='/about' render={ () => <About title='About' /> } />
          <Route exact path='/teachers' component={Teachers}/>
          {/* Parameters of a pat are dynamic and we're using name to build the link */}
          <Route path='/teachers/:topic/:name' component={Feature}/>
          <Route path='/courses' component={Courses}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
