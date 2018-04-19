import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.sass';
import Link from 'gatsby-link';
import logo from '../../images/andruska-logo.svg';

const Header = () => (
  <div className={styles.header}>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="Logo" />
    </Link>
    <Navigation />
  </div>
);

export default Header;
