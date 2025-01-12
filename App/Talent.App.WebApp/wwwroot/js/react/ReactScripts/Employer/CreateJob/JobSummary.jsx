﻿/* Self introduction section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { ErrorMessage } from './ErrorMessage.jsx';

export class JobSummary extends React.Component {
    constructor(props) {
        super(props);
        this.updateField = this.updateField.bind(this)
    };

    updateField(event) {
        this.props.updateStateData(event);
    };

    render(item) {
        return (
            <div className="field">
                <textarea
                    name="summary"
                    placeholder="Please write a job summary."
                    value={this.props.summary}
                    onChange={this.updateField}
                >
                </textarea>
                <ErrorMessage isError={ this.props.isError } errorMessage={ this.props.errorMessage } />
                {/*this.props.isError ? <div className="ui basic red pointing prompt label transition visible">{this.props.errorMessage}</div> : null*/}
            </div>
        )
    }
}



