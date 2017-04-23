import React, { Component } from 'react';
import './index.css';

export default class Button extends Component {
    render() {
        return(
            <div className="button">
                <button onClick={this.props.addAction}>{this.props.caption}</button>
            </div>
        );
    }
}