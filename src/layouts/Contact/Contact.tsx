import * as React from 'react';
import { ContactTemplate } from '../ContactTemplate/ContactTemplate';

const styles = require('./Contact.module.sass');
const create = require('../../images/ic_create_black_24px.svg');

interface State {
  active?: boolean;
  openContactOverlay?: () => void;
  closeContactOverlay?: () => void;
}

export class Contact extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = { active: false };
    this.openContactOverlay = this.openContactOverlay.bind(this);
    this.closeContactOverlay = this.closeContactOverlay.bind(this);
  }
  private openContactOverlay() {
    this.setState({
      active: true,
    });
  }

  private closeContactOverlay() {
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
          <ContactTemplate closeContactOverlay={this.closeContactOverlay} />
        )}
      </div>
    );
  }
}
