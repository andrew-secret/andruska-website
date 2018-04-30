import * as React from 'react';
import { LinkItem, LinkItemProps } from '../../Components/LinkItem/LinkItem';
const styles = require('./Navigation.module.sass');

interface State {
  activeLink: boolean;
}

export class Navigation extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = { activeLink: false };
    this.toggleClass = this.toggleClass.bind(this);
  }

  private toggleClass = () => {
    const currentState = this.state.activeLink;
    this.setState({ activeLink: !currentState });
  };

  render() {
    return (
      <div>
        <ul className={styles.navigationList}>
          <LinkItem to="/">Home</LinkItem>
          <LinkItem to="/vita">Vita</LinkItem>
        </ul>
        <button
          type="button"
          onClick={this.toggleClass}
          className={styles.menuButton}
        >
          {this.state.activeLink === true ? 'Close' : 'Menu'}
        </button>
        {this.state.activeLink && (
          <ul className={styles.mobileNavigationList}>
            <LinkItem to="/" onClick={this.toggleClass}>
              Home
            </LinkItem>
            <LinkItem to="/vita" onClick={this.toggleClass}>
              Vita
            </LinkItem>
          </ul>
        )}
      </div>
    );
  }
}
