import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styles from './Navigation.module.sass';

const ListLink = props =>
    <li className={styles.navigationItem}>
    <Link to={props.to}
        activeClassName={styles.active}>
        {props.children}
    </Link>
    </li>

const Navigation = () => (
    <ul className={styles.navigationList}>
        <ListLink to="/">
            Home
        </ListLink>
        <ListLink to="/vita">
            Vita
        </ListLink>
    </ul>
);

export default Navigation;