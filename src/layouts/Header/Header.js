import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.sass';
import logo from '../../images/andruska-logo.svg';

console.log(styles);

const Header = () => (
    <div className={styles.header}>
        <img
            className={styles.logo} 
            src={logo} alt="Logo" />
        <Navigation />
    </div>
);

export default Header;
