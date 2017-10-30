import React from 'react';
import Link from 'gatsby-link';
import styles from './Vita.module.sass';
import portrait from '../images/andre-rusakow.png';

const Vita = () => (
  <div className={styles.wrapper}>
    <div className={styles.contentLeft}>
      <h1 className={styles.headlineIntroduction}>
        <span>Hello,</span> i’m André and live in Hamburg.
      </h1>
      <p className={styles.description}>
        With a background in desgin, tech, and freelance, i'm 
        comfortable with the digital world. As a fullstack designer 
        i have a big passion for frontend technologies. I learn new things 
        every day and still have to learn a lot, 
        which is really exiting for me. If i'm not stuck on my computer, you 
        can find me on the streets of Hamburg with my skateboard 
        or in the ocean on surfboard.
      </p>
      <img src={portrait}
        className={styles.vitaPicture} 
        alt="portrait of André"/>
    </div>
    <div className={styles.contentRight}>
      <h2 className={styles.vita}>
        Vita.
      </h2>
      <h3 className={styles.headlineTopic}>
        Work history
      </h3>
      <h4 className={styles.headlineDescription}>
        Jimdo - Fullstack Designer 09/2015 - now
      </h4>
      <p className={styles.textJobDescription}>
        As part of the Template Design Team I been responsible 
        for our templates. I worked on concepts and on the technical 
        implementation of the templates into the Jimdo CMS. We refactor all 
        40 templates and make them responsive. After that i switched to another team. 
        Currently we’re responsible for the whole funnel process at Jimdo.
      </p>

      <h4 className={styles.headlineDescription}>
        Andruska - founder 14/07/2016 - now
      </h4>
      <p className={styles.textJobDescription}>
        I made the decision to found my own small business to develop 
        myself and earn more experience with digital products. I try to focus 
        on projects where i can learn a lot. This journey is often really exciting 
        for me, because i discover new things and meet new intersting people. 
        Sometimes it's exhausting but in a good way.
      </p>

      <h4 className={styles.headlineDescription}>
        Nikdin - Allrounder 06/2012 - 09/2015
      </h4>
      <p className={styles.textJobDescription}>
        It is an agency based in the northern part of 
        germany, where i started my apprenticeship as a 
        media designer. It was an really exciting time for 
        me where i get in touch with a lot of creativity and 
        digital power. I worked on digital projects, 
        3D stuff and print.
      </p>

      <h3 className={styles.headlineTopic}>
        Familiar with:
      </h3>
      <ul className={styles.skillsList}>
        <li className={styles.skillItem}>
          HTML/CSS
        </li>
        <li className={styles.skillItem}>
          SASS
        </li>
        <li className={styles.skillItem}>
          JavaScript ES6
        </li>
        <li className={styles.skillItem}>
          React
        </li>
        <li className={styles.skillItem}>
          Gatsby
        </li>
        <li className={styles.skillItem}>
          Jekyll
        </li>
        <li className={styles.skillItem}>
          Git
        </li>
        <li className={styles.skillItem}>
          Sketch/InVision
        </li>
        <li className={styles.skillItem}>
          Adobe CC
        </li>
        <li className={styles.skillItem}>
          UX/UI Design
        </li>
        <li className={styles.skillItem}>
          Print
        </li>
      </ul>
      <h3 className={styles.headlineTopic}>
        Education.
      </h3>
      <ul className={styles.educationList}>
        <li className={styles.educationItem}>
          Final secondary-school examinations  2007
        </li>
        <li className={styles.educationItem}>
          Graduation as a IT specialist 2012
        </li>
        <li className={styles.educationItem}>
          Graduation as a Media Designer 2015
        </li>
      </ul>
    </div>
  </div>
)

export default Vita;
