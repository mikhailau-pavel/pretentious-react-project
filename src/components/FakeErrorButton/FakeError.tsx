import { Component, ReactNode } from "react";

class FakeErrorButton extends Component {
    state = {drawError: false};

    createError = () => {
        this.setState({drawError: true})
    }

    render(): ReactNode {
        if (this.state.drawError) {
            throw new Error ("Hyperdrive Failure!");
        }
        return <button onClick={this.createError}>Error Maker</button>
    }




}
export default FakeErrorButton