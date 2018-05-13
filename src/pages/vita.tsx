import * as React from 'react';
import Link from 'gatsby-link';
import { List, ListProps } from '../Components/List/List';

const styles = require('./Vita.module.sass');
const portrait = require('../images/andre-rusakow.png');

interface allContentfullWorkHistory {
  allContentfulWorkHistoryList: {
    edges: [
      {
        node: {
          id: string;
          title: string;
          text: {
            text: string;
          };
        };
      }
    ];
  };
}

interface allContentfulSkills {
  allContentfulSkillsList: {
    edges: [
      {
        node: {
          id: string;
          title: string;
        };
      }
    ];
  };
}

interface allContentfulEducation {
  allContentfulEducationList: {
    edges: [
      {
        node: {
          id: string;
          title: string;
        };
      }
    ];
  };
}

type contentfulData = allContentfullWorkHistory &
  allContentfulSkills &
  allContentfulEducation;

interface VitaProps {
  items: ListProps;
  data: contentfulData;
}

const Vita: React.SFC<VitaProps> = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentLeft}>
        <h1 className={styles.headlineIntroduction}>
          <span> Hello, </span> I’m André and live in Hamburg.
        </h1>
        <p className={styles.description}>
          With a background in desgin, tech, and freelance, I 'm comfortable
          within the digital world.As a fullstack designer I have a big passion
          for frontend technologies.I learn new things every day and still have
          to learn a lot, which is really exiting for me.When I 'm not stuck on
          my computer, you can find me on the streets of Hamburg with my
          skateboard or in the ocean on a surfboard.
        </p>
        <img
          src={portrait}
          className={styles.vitaPicture}
          alt="portrait of André"
        />
      </div>
      <div className={styles.contentRight}>
        <h2 className={styles.vita}> Vita. </h2>
        <h3 className={styles.headlineTopic}> Work history </h3>
        <List items={props.data.allContentfulWorkHistoryList.edges} />

        <h3 className={styles.headlineTopic}> Familiar with.</h3>
        <List items={props.data.allContentfulSkillsList.edges} />
        <h3 className={styles.headlineTopic}> Education.</h3>
        <List
          items={props.data.allContentfulEducationList.edges}
          classNameItem={styles.educationItem}
        />
      </div>
    </div>
  );
};

export default Vita;

export const vitaQuery = graphql`
  query vitaPage {
    allContentfulWorkHistoryList(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          id
          title
          text {
            text
          }
        }
      }
    }
    allContentfulSkillsList {
      edges {
        node {
          title
        }
      }
    }
    allContentfulEducationList {
      edges {
        node {
          title
        }
      }
    }
  }
`;
