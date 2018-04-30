import * as React from 'react';
import Link from 'gatsby-link';

import { Navigation } from '../Navigation/Navigation';

const styles = require('./Header.module.sass');
const logo = require('../../images/andruska-logo.svg');

export const Header: React.SFC = () => (
  <div className={styles.header}>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="Logo" />
    </Link>
    <Navigation />
  </div>
);
