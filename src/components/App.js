import React, { Component, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import ForBuyers from './ForBuyers';
import ForSellers from './ForSellers';
import Contact from './Contact';
import Brokerage from './Brokerage';
import MyListings from './MyListings';
// maybe the code splitting in index.js messing up routes?

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '????'
    };
  }
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Menu current={this.state.current} />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/MyListings" component={MyListings} />
          <Route exact path="/ForSellers" component={ForSellers} />
          <Route exact path="/ForBuyers" component={ForBuyers} />
          <Route exact path="/Brokerage" component={Brokerage} />
          <Route exact path="/Contact" component={Contact} />
          <Footer />
        </Fragment>
      </HashRouter>
    );
  }
}
