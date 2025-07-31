import { Component } from 'react'

type CounterProps = {
    message: string
}

type State = {
    count: number
}

export default class Counter extends Component<CounterProps, State> {
    state = {
        count: 0,
    }

    handlePlus = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    handleDelete = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }

    render() {
        return (
            <div>
                <h2>Class Counter Component = {this.state.count}</h2>
                <h3>{this.props.message}</h3>

                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleDelete}>+</button>
            </div>
        )
    }
}
