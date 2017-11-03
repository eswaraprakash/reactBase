//App.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';

import jsImage from '../assets/js.png';

export default class Hello extends Component {
    render(){
        return (
            <div>
                React Base framework
                <div>
                    <img src={jsImage} alt='CommanderJS' />
                </div>
            </div>
        );
    }
}
render(<Hello />, document.getElementById('app'));
