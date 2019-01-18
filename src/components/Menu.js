import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      current: 'home'
    };
  }

  menuItemClick = () => {
    this.setState({
      current: '',
      show: false
    });
  };

  hamburgerClick = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    return (
      <header>
        <p>
          Debbie <span> Jefferson</span>
        </p>
        <div className={`menu-btn-container ${this.state.show ? `close` : ``}`}>
          <div
            onClick={this.hamburgerClick}
            className={`menu-btn ${this.state.show ? `close` : ``}`}
          >
            <div className="menu-btn-line lineOne" />
            <div className="menu-btn-line lineTwo" />
            <div className="menu-btn-line lineThree" />
          </div>
        </div>
        <ul className={`menu-nav ${this.state.show ? `show` : ``}`}>
          <Link
            to={'/'}
            className={`menu-nav-item ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            Home
          </Link>
          <Link
            to={'/About'}
            className={`menu-nav-item ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            About
          </Link>
          <Link
            to={'/MyListings'}
            className={`menu-nav-item ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            My Listings
          </Link>
          <Link
            to={'/ForSellers'}
            className={`menu-nav-item ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            For Sellers
          </Link>
          <Link
            to={'/ForBuyers'}
            className={`menu-nav-item ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            For Buyers
          </Link>
          <Link
            to={'/Brokerage'}
            className={`menu-nav-item ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            Brokerage
          </Link>
          <Link
            to={'/Contact'}
            className={`menu-nav-item ${this.state.show ? `show` : ``}`}
            onClick={this.menuItemClick}
          >
            Contact
          </Link>
        </ul>
      </header>
    );
  }
}
