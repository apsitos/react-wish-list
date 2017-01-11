import React, { Component } from 'react'

export default class Wish extends Component {
  constructor() {
    super();
    this.state = {
      wish: '',
    }
  }

  componentDidMount() {
    if 
  }

  wish(e) {
    this.setState({ wish: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => {wish(e)}}/>
      </div>
    )
  }
}
