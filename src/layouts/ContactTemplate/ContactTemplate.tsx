import * as React from 'react';
import * as classNames from 'classnames';
import { Button } from '../../Components/Button/Button';
import { Input } from '../../Components/Input/Input';

const styles = require('./ContactTemplate.module.sass');

interface Props {
  closeContactOverlay: () => void;
}

export const ContactTemplate: React.SFC<Props> = props => {
  return (
    <div className={styles.contactOverlay}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={props.closeContactOverlay}
      >
        <i className={styles.closeIcon}>
          <span className={styles.srOnly}>close</span>
        </i>
      </button>
      <div className={styles.left}>
        <h2 className={styles.headline}>
          <span>Hallo,</span> ich bin André schreib mir doch einfach.
        </h2>
      </div>
      <div className={styles.right}>
        <form action="//formspree.io/andre.rusakow@gmail.com" method="POST">
          <Input
            label="Name"
            className={styles.inputName}
            type="name"
            required={true}
          />

          <Input
            label="E-Mail"
            className={styles.inputMail}
            type="email"
            required={true}
          />

          <Input
            label="Message"
            className={styles.inputMessage}
            type="text"
            required={true}
          />

          <Button type="submit" label="Submit" />
        </form>
      </div>
    </div>
  );
};
