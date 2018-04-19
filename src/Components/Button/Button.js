import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.sass';

const Button = props => {
  const buttonClasses = classnames(styles.buttonStyle, props.className);
  return (
    <button className={buttonClasses} type={props.type} onClick={props.onClick}>
      {props.label}
      <i className="material-icons">{props.icon}</i>
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: 'button',
  label: 'This is a button',
};
