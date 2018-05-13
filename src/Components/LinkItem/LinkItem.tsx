import * as React from 'react';
import Link from 'gatsby-link';

const styles = require('./linkItem.module.sass');

export interface LinkItemProps {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}

type Props = LinkItemProps;

export const LinkItem: React.SFC<Props> = props => {
  return (
    <li className={styles.linkItem}>
      <Link
        exact
        to={props.to}
        activeClassName={styles.active}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    </li>
  );
};
