import * as React from 'react';
import * as classnames from 'classnames';

const styles = require('./Input.module.sass');

interface Props {
  className?: string;
  label: string;
  type: 'text' | 'email' | 'name';
  required?: boolean;
}

export const Input: React.SFC<Props> = props => {
  const inputClasses = classnames(styles.input, props.className);
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.type}>
        {props.label}
      </label>
      {props.type === 'text' ? (
        <textarea className={styles.textarea} />
      ) : (
        <input
          className={inputClasses}
          type={props.type}
          id={props.type}
          required={props.required}
        />
      )}
    </div>
  );
};
