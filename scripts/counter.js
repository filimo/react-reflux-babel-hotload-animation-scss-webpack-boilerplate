'use strict'

require('gsap')
import React from 'react'
import Actions from './actions'

export default class Counter extends React.Component {
    static propTypes = { initialCount: React.PropTypes.number }
    _y = 20

    constructor() {
        super()
        this.state = {deltaY: 0}
    }

    click(event) {
        Actions.increaseCounter()
    }

    wheel(event) {
        TweenLite.to(React.findDOMNode(this), .5, {y: this._y-=event.deltaY})
        this.setState({deltaY: event.deltaY})
    }

    render() {
        return (
            <div ref="el" className={"counter"} onClick={this.click.bind(this)} onWheel={this.wheel.bind(this)}>
                {this.props.text} {this.props.count} {this.state.deltaY }
            </div>
        )
    }
}
