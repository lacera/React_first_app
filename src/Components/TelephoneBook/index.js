import React, { Component } from 'react';
import './index.css';

import AddControlsPanel from '../AddControlsPanel';
import TelephoneList from '../TelephoneList';

export default class TelephoneBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: localStorage.telephoneBookRecords ? JSON.parse(localStorage.telephoneBookRecords) : []
        };
    }

    addToTelephoneList = (comment) => {
        this.state.records.push({name: comment.name, email: comment.email, telNumber: comment.telNumber});
        this.setState({records: this.state.records});
        localStorage.telephoneBookRecords = JSON.stringify(this.state.records);
        console.log('Добавляем запись: ' + comment.name + ' ' + comment.email + ' ' + comment.telNumber);
        console.log(this.state.records);
    };

    delFromTelephoneList = (item) => {
        this.state.records.splice(item, 1);
        this.setState({records: this.state.records});
        localStorage.telephoneBookRecords = JSON.stringify(this.state.records);
        console.log('Удаляем запись: ' + item);
        console.log(this.state.records);
    };

    render() {
        return(
            <div className="telephone-book-body">
                <AddControlsPanel addToTelephoneList={this.addToTelephoneList} />
                <TelephoneList delFromTelephoneList={this.delFromTelephoneList} records={this.state.records} />
            </div>
        );
    }
}