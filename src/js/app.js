//App.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.less';

import jsImage from '../assets/js.png';
import tableImage from '../assets/iot-table.jpeg';

export default class Hello extends Component {
    render(){
        return (
            <div>
                React Base framework
                <div>
                    <img src={jsImage} alt='CommanderJS' />
                    <img src={tableImage} />
                </div>
            </div>
        );
    }
}
render(<Hello />, document.getElementById('app'));
