import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styles from "./Navigation.module.sass";

const ListLink = props => (
  <li className={styles.navigationItem}>
    <Link to={props.to} 
        activeClassName={styles.active}
        onClick={props.onClick}>
      {props.children}
    </Link>
  </li>
);

class Navigation extends Component {
  constructor() {
    super();
    this.state = { active: false };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div>
        <ul className={styles.navigationList}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/vita">Vita</ListLink>
        </ul>
        <button
          type="button"
          onClick={this.toggleClass}
          className={styles.menuButton}
        >
            {this.state.active === true ? "Close" : "Menu"}
        </button>
        {this.state.active === true ? (
          <ul className={styles.mobileNavigationList}>
            <ListLink 
                to="/"
                onClick={this.toggleClass}>
                Home
            </ListLink>
            <ListLink 
                to="/vita"
                onClick={this.toggleClass}>
                Vita
            </ListLink>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Navigation;
