import React from 'react';
import classnames from 'classnames';
import styles from './Input.module.sass';

const Input = (props) => {
    const inputClasses = classnames(styles.input, props.className);
    return (
    <div className={styles.wrapper}>

        <label 
            className={styles.label}
            for={props.type}>
            {props.label}
        </label>
        {props.type === 'text' ? (
            <textarea 
                className={styles.textarea}>
            </textarea>
        ):(
            <input 
                className={inputClasses}
                type={props.type}
                id={props.type}
                required={props.required}>
            </input>
        )}
    </div>
    )
}

export default Input;

Input.defaultProps = {
    type: 'name',
    label: 'This is a label',
    required: false,
}