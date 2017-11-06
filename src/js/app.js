//App.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.less';


export default class Hello extends Component {
    render(){
        return (
            <div>
                React Base framework
                <div>
                    <img src='images/js.png' alt='CommanderJS' />
                </div>
            </div>
        );
    }
}
render(<Hello />, document.getElementById('app'));
