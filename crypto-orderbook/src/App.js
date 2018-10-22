import React, { Component } from 'react';
import Orderbooklist from './Components/Orderbooklist'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

type Props = {};
class App extends Component<Props> {
  constructor(props){
      super(props)

    this.state = {
      sellData: [],
      buyData: []
    };
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/bittrex')
      .then((res) => {
        console.log(res);
        this.setState({
          sellData: res.data.asks,
          buyData: res.data.bids
        })
      })
      console.log(this.state)
  }

  

  // renderOrderBook() {
  //  console.log(this.state.orderbook.asks)
  //  return this.state.orderbook.asks.map(order =>
  //    <li>need a name</li>
  //    );
  // }

  render() {
    console.log(this.state)
//    let listOfOrders = null

     
      let listOfAsks = this.state.sellData.map((sell, index) => {
        return <li key={index}>
                  <p className='sellPrice'>Price: {sell.Rate}</p> 
                  <p className='sellQuantity'>Quantity: {sell.Quantity}</p>
                </li> 
      })

      let listOfBids = this.state.buyData.map((buy, index) => {
        return <li key={index}>
                  <p className='buyQuantity'> Quantity: {buy.Quantity}</p>
                  <p className='buyPrice'> Price: {buy.Rate}</p>
               </li>   
      })

      
    
    return (
      <div className="App">
        
          <div className='bid'>
            <ul className="bidlist">
              {listOfBids}
            </ul> 
          </div>
          <div className='ask'> 
            <ul className='asklist'>
              {listOfAsks}
            </ul>
          </div>
        
      </div>
    );
  }
}

export default App;
