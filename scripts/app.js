import React from 'react'
import Store from './store'
import Actions from './actions'
import Counter from './counter'

var unsubscribe

export default class App extends React.Component {
    state = {count: 0}

    constructor() {
        super()
        //setInterval(Actions.increaseCounter.bind(Store), 500)
    }

    onStatusChange(state) {
        this.setState(state)
    }

    componentDidMount() {
        unsubscribe = Store.listen(this.onStatusChange.bind(this))
    }

    componentWillUnmount() {
        unsubscribe()
    }

    render() {
        console.log('render App', this.state)
        return (
            <div>
                <h1>Hello1, world.</h1>
                <Counter text={"Counter1:"} count={this.state.count}/>
                <Counter text={"Counter2:"} count={this.state.count}/>
                <Counter text={"Counter3:"} count={this.state.count}/>
                <Counter text={"Counter4:"} count={this.state.count}/>
            </div>
        )
    }
}