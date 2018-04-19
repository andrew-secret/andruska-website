import React from 'react';
import styles from './Footer.module.sass';

const urls = {
  github: 'https://github.com/andrew-secret',
  instagram: 'https://www.instagram.com/secret_andrew/',
  codepen: 'https://codepen.io/andrew_secret/',
};

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.left}>
      <a className={styles.link} href="mailto:andre.rusakow@gmail.com">
        andre.rusakow@gmail.com
      </a>
    </div>
    <div className={styles.right}>
      <a className={styles.link} href={urls.github}>
        github
      </a>
      <a className={styles.link} href={urls.instagram}>
        instagram
      </a>
      <a className={styles.link} href={urls.codepen}>
        codepen
      </a>
    </div>
  </div>
);

export default Footer;
