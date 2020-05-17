import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state ={
      first_sushi: 0,
      sushis: [],
      money: 100,
      eaten: []
    }
  }

  moreSushi = () => {
    this.setState({
      first_sushi: this.state.first_sushi + 4,
      last_sushi: this.state.last_sushi + 4
    })
  }

  handleEatSushi = (sushi) => {
    const newBalance = this.state.money - sushi.price
    if (newBalance >= 0){
        this.setState({
          money: newBalance,
          eaten: this.state.eaten.concat(sushi)
        })
    }else {
      alert(`You don't have enough money to pay for this sushi!`)
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushisArray => {
      this.setState({
        sushis: sushisArray
      })
    })
  }

  render() {
    const sushiToRender = this.state.sushis.slice(this.state.first_sushi, (this.state.first_sushi+4))
    return (
      <div className="app">
        <SushiContainer sushi={sushiToRender} moreSushi={this.moreSushi} handleEatSushi={this.handleEatSushi} eatenSushi={this.state.eaten}/>
        <Table sushi={sushiToRender} money={this.state.money}/>
      </div>
    );
  }
}

export default App;