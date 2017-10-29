import React, {Component} from "react";
import styles from './Contact.module.sass';
import ContactTemplate from '../ContactTemplate/ContactTemplate';

class Counter extends Component {
    constructor() {
        super();
        this.state = { active: false };
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        const button1 = <button>Open portal with pseudo modal</button>;
        return (
        <div>
            <button
                className={styles.contactButton}
                onClick={this.toggleClass}>
                <i className="material-icons">edit</i>
            </button>
            {this.state.active === true ? (
                <ContactTemplate
                    active={this.state.active}
                    toggleClass={this.toggleClass}/>
            ) : (
                null
        )}
    </div>
    );
  }
}

export default Counter;
