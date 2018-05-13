import * as React from 'react';
import * as classnames from 'classnames';
const styles = require('./listItem.module.sass');

interface ListItemProps {
  title: string;
  text?: string;
  classNameItem?: string;
}

export const ListItem: React.SFC<ListItemProps> = props => {
  return (
    <React.Fragment>
      {props.text ? (
        <li className={classnames(styles.listItem)}>
          <span className={styles.title}>{props.title}</span>
          <p className={styles.text}>{props.text}</p>
        </li>
      ) : (
        <li
          className={classnames(
            styles.listItem,
            styles.simpleListItem,
            props.classNameItem
          )}
        >
          <span className={styles.simpleTitle}>{props.title}</span>
        </li>
      )}
    </React.Fragment>
  );
};
