import React, { Component } from 'react';
import './index.css';

import InputText from '../InputText';
import PanelTitle from '../PanelTitle';
import Button from '../Button';

export default class AddControlsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            telNumber: ''
        };
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    };
    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };
    handleTelNumberChange = (e) => {
        this.setState({telNumber: e.target.value});
    };
    addClickHandler = () => {
        // получаем данные из input-ов и записываем в новый объект массива
        // после чего должна случиться перерисовка TelephoneList
        var name = this.state.name.trim(),
            email = this.state.email.trim(),
            telNumber = this.state.telNumber.trim();

        if (!email || !name || !telNumber) {
            return;
        }

        this.props.addToTelephoneList({name: name, email: email, telNumber: telNumber});
        this.setState({name: '', email: '', telNumber: ''});
    };

    render() {
        return(
            <section className="add-controls-panel">
                <PanelTitle title="Добавление записи в телефонную книгу" />
                <InputText placeholder="ФИО" value={this.state.name} onChange={this.handleNameChange} />
                <InputText placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} />
                <InputText placeholder="Телефон" value={this.state.telNumber} onChange={this.handleTelNumberChange} />
                <Button addAction={ this.addClickHandler } caption="Добавить" />
            </section>
        );
    }
}