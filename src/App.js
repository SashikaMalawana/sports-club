import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sporters from './components/sporters/Sporters';
import AddSporter from './components/sporters/AddSporter';
import EditSporter from './components/sporters/EditSporter';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App bg-dark">
            <Header branding="Sports Club" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Sporters} />
                <Route exact path="/sporter/add" component={AddSporter} />
                <Route exact path="/sporter/edit/:id" component={EditSporter} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
