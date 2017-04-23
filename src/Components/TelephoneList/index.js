import React, { Component } from 'react';
import './index.css';

import PanelTitle from '../PanelTitle';
import TelephoneRecord from '../TelephoneRecord';

export default class TelephoneList extends Component {
    render() {
        var {delFromTelephoneList} = this.props;

        var recordNodes = this.props.records.map(function(record, i) {
            return (
                <TelephoneRecord key={i}
                                 num={i + 1}
                                 name={record.name}
                                 email={record.email}
                                 telNumber={record.telNumber}
                                 delFromTelephoneList={ delFromTelephoneList }
                />
            );
        });

        console.log(recordNodes);

        return(
            <section className="telephone-list">
                <PanelTitle title="Телефонная книга" />
                <ul className="telephone-list__ul">
                    {recordNodes}
                </ul>
            </section>
        );
    }
}