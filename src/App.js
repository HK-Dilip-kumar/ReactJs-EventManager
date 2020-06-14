import React from 'react';
import Header from './Header/Header';
import Landing from "./Header/Landing";
import Admin from "./pages/Admin";
import AddEvent from './pages/AddEvent';
import NotFound from "./pages/NotFound";
import State from "./components/State";
import DeleteEvent from './pages/DeleteEvent';
import UpdateEvent from './pages/UpdateEvent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header branding="Event Manager" />
        <Route>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/addEvent" component={AddEvent} />
            <Route exact path="/DeleteEvent" component={DeleteEvent} />
            <Route exact path="/UpdateEvent" component={UpdateEvent} />
            <Route component={NotFound} />
          </Switch>
        </Route>
      </Router>
    </div >
  );
}
export default App;