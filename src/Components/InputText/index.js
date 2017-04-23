import React, { Component } from 'react';
import './index.css';

export default class InputText extends Component {
    render() {
        return(
            <div className="input-text-box">
                <input type="text"
                       className="input-text-box__input-element"
                       placeholder={ this.props.placeholder }
                       value={ this.props.value }
                       onChange={ this.props.onChange }
                />
            </div>
        );
    }
}