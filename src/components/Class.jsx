import { Component } from "react";

export class Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 1000,
      glass: 'água'
    }
  }

  changeGlass = () => {
    const glass = this.state.glass !== 'água' ? 'água' : 'refrigerante'
    this.setState({ glass })
  }

  render() {
    const { glass, clock } = this.state;

    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={this.changeGlass}>{glass}</button>
      </div>
    )
  }

  componentDidMount() {
    const setNewGlass = () => this.setState({ glass: 'suco' })

    window.setTimeout(setNewGlass, 2000)
  }

  componentDidUpdate() {
    const setNewGlass = () => this.setState({ glass: 'cerveja' })

    window.setTimeout(setNewGlass, 2000)
  }
}