import * as React from 'react';
import * as classnames from 'classnames';
import { ListItem } from '../ListItem/ListItem';

const styles = require('./list.module.sass');

export interface ListProps {
  items: Array<{
    node: {
      id: string;
      title: string;
      text?: {
        text?: string;
      };
    };
  }>;
  classNameList?: string;
  classNameItem?: string;
}

export const List: React.SFC<ListProps> = props => {
  return (
    <ul className={classnames(styles.list, props.classNameList)}>
      {props.items.map((item: any) => (
        <React.Fragment>
          {item.node.text ? (
            <ListItem
              key={item.node.id}
              title={item.node.title}
              text={item.node.text.text}
            />
          ) : (
            <ListItem
              key={item.node.id}
              title={item.node.title}
              classNameItem={props.classNameItem}
            />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};
