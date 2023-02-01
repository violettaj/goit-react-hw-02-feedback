import PropTypes from 'prop-types';

import React, { Component } from "react";



export class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      static defaultProps = {
        step: 0,
    };

    handleIncrement = (evt) => {
        this.setState(state => ({
            value: state.value + this.props.step
        }))
    }

    render() {
    
        return (
<div>
    <h2>Please leave feedback</h2>
    <button onClick={this.handleIncrement} type="button">
        Good</button>
    <button onClick={this.handleIncrement} type="button">
        Neutral</button>
    <button onClick={this.handleIncrement} type="button">
        Bad</button>
    <h2>Statistics</h2>
    <span>Good:</span>
    <span>{this.state.good}</span>
    <span>Neutral:</span>
    <span>{this.state.neutral}</span>
    <span>Bad:</span>
    <span>{this.state.bad}</span>
</div>
        );
    }
}
