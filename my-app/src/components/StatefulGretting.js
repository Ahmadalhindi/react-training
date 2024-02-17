import React from 'react';

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            instroction: "Hello!",
            buttonText: "Exit",
        };
    }

    render() {
        return(
            <div>
                <h1>{this.state.instroction} {this.props.greeting}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting