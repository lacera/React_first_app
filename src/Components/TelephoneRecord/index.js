import React, { Component } from 'react';
import './index.css';

import DeleteRecordButton from '../DeleteRecordButton';

export default class TelephoneRecord extends Component {
    onDelButtonClick = () => {
        this.props.delFromTelephoneList(this.props.num - 1);
    };

    render() {
        return(
            <li className="telephone-record">
                <div className="telephone-record__div">
                    <div className="telephone-record__div__num">#{ this.props.num }</div>
                    <div className="telephone-record__div__name-email">
                        <div className="telephone-record__div__name" title={ this.props.name } >{ this.props.name }</div>
                        <div className="telephone-record__div__email" title={ this.props.email } >{ this.props.email }</div>
                    </div>
                    <div className="telephone-record__div__telephone">
                        <div className="telephone-record__div__telephone__ico">Т.</div>
                        <div className="telephone-record__div__telephone__number"
                             title={ this.props.telNumber } >{ this.props.telNumber }
                        </div>
                    </div>
                    <DeleteRecordButton className="telephone-record__div__delete"
                                        delAction={ this.onDelButtonClick }
                    />
                </div>
            </li>
        );
    }
}