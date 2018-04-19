import React, { Component } from 'react';
import styles from './Contact.module.sass';
import ContactTemplate from '../ContactTemplate/ContactTemplate';
import create from '../../images/ic_create_black_24px.svg';

class Counter extends Component {
  constructor() {
    super();
    this.state = { active: false };
    this.openContactOverlay = this.openContactOverlay.bind(this);
    this.closeContactOverlay = this.closeContactOverlay.bind(this);
  }
  openContactOverlay() {
    this.setState({
      active: true,
    });
  }

  closeContactOverlay(event) {
    this.setState({
      active: false,
    });
  }

  render() {
    return (
      <div>
        <button
          className={styles.contactButton}
          onClick={this.openContactOverlay}
        >
          <i className={styles.createIcon}>
            <span className={styles.srOnly}>Contact</span>
          </i>
        </button>
        {this.state.active && (
          <ContactTemplate
            handleCloseOnEnter={this.handleCloseOnEnter}
            closeContactOverlay={this.closeContactOverlay}
          />
        )}
      </div>
    );
  }
}

export default Counter;
