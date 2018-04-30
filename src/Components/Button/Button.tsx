import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./Button.module.sass');

interface Props {
  className?: string;
  label: string;
  type: 'button' | 'submit';
  icon?: string;
  onClick?: () => void;
}

export const Button: React.SFC<Props> = props => {
  const buttonClasses = classnames(styles.buttonStyle, props.className);
  return (
    <button className={buttonClasses} type={props.type} onClick={props.onClick}>
      {props.label}
      <i className="material-icons">{props.icon}</i>
    </button>
  );
};
