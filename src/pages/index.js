import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.sass';
// import flowerImage from '../images/andruska-flowers.png';

const IndexPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.visual}>
    </div>
    <div className={styles.content}>
      <h1 className={styles.headline}>
      Hello,
      i'm André. I work with pixel &  papier.
      </h1>
      <p className={styles.subheadline}>
        Designer. Developer and Digital enthusiast.
      </p>
    </div>
  </div>
);

export default IndexPage;
