import React, { Component } from 'react';
import styles from './Contact.module.sass';
import ContactTemplate from '../ContactTemplate/ContactTemplate';
import create from '../../images/ic_create_black_24px.svg';

class Counter extends Component {
  constructor() {
    super();
    this.state = { active: false };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div>
        <button className={styles.contactButton} onClick={this.toggleClass}>
          <i className={styles.createIcon}>
            <span className={styles.srOnly}>Contact</span>
          </i>
        </button>
        {this.state.active && (
          <ContactTemplate
            active={this.state.active}
            toggleClass={this.toggleClass}
          />
        )}
      </div>
    );
  }
}

export default Counter;
