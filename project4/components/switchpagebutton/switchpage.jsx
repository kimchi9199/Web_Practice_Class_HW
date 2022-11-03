import React from 'react';
import './swtichpagebutton.css';
import '../../styles/main.css';
import Example from '../example/Example'
import States from "../states/States";
import ReactDOM from 'react-dom';
import Header from '../header/Header'

class SwitchButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            example: 1,
            states: 0,
        }
    }

    Switch(){
        if (this.state.example === 1 && this.state.states === 0) {
            this.setState({example : 0});
            this.setState({states : 1});
            document.getElementById('switchbutton').innerHTML = 'Switch to Example'
        }
        else{
            this.setState({example: 1});
            this.setState({states: 0});
            document.getElementById('switchbutton').innerHTML = 'Switch to States'
        }
        console.log({'example' : this.state.example, 'states': this.state.states})

    }

    ShowPage(){
        if (this.state.example === 1 && this.state.states === 0) {
            return (
                <div>
                    <Header></Header>
                    <Example></Example>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Header></Header>
                    <States></States>
                </div>
            );
        }
    }


    render() {
        return (
            <div>
                <button id={'switchbutton'} onClick={e => this.Switch()} className="button button2">Switch to States</button>
                {this.ShowPage()}
            </div>

        );
    }
}

export default SwitchButton;