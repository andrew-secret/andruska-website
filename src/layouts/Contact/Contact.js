import React, {Component} from "react";

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
        return (
            <div>
                <button 
                    onClick={this.toggleClass}>
                click
                </button>
                {this.state.active === true ? (
                    <p>ich bin daa!
                        <i className="material-icons">alarm</i>
                    </p>
                ) : (
                    <p>nee</p>
            )}
            </div>
    );
  }
}

export default Counter;
