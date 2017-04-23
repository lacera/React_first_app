import React, { Component } from 'react';
import './index.css';

export default class PanelTitle extends Component {
    render() {
        return(
            <div className="panel-title">{ this.props.title }</div>
        );
    }
}