import {Component} from 'react'
import './index.css'

class Counter extends Component {
  onIncreament = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  onDecreament = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }
  state = {count: 0}
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div className="button-container">
          <button className="decrease-button" onClick={this.onDecreament}>
            Decrease
          </button>
          <button className="increase-button" onClick={this.onIncreament}>
            Increase
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
