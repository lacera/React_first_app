import React, { Component } from 'react';
import './index.css';

export default class DeleteRecordButton extends Component {
    render() {
        return(
            <div className={ this.props.className } onClick={ this.props.delAction } >&times;</div>
        );
    }
}