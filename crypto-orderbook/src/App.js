import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props){
      super(props)

    this.state = {
      sellData: [],
      buyData: [],
      first: '',
      second: ''
    };
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onClick = this.onClick.bind(this)

  }

  componentDidMount() {
    let post = {
      first: 'BTC',
      second: 'ETH'
    }
    axios.post('https://secret-spire-98789.herokuapp.com/api/orderbook', post)
      .then((res) => {       
        this.setState({
          sellData: res.data.asks,
          buyData: res.data.bids,
          market: 'BTC-ETH'
        })
      })
  }

  onClick() {
    let post = {
      first: 'BTC',
      second: 'LTC'
    }
    axios.post('https://secret-spire-98789.herokuapp.com/api/orderbook', post)
      .then((res) => {        
        this.setState({
          sellData: res.data.asks,
          buyData: res.data.bids,
          market: 'BTC-LTC'
        })
      })
      
  }

  

  // renderOrderBook() {
  //  console.log(this.state.orderbook.asks)
  //  return this.state.orderbook.asks.map(order =>
  //    <li>need a name</li>
  //    );
  // }

  render() {
    
//    let listOfOrders = null

     
      let listOfAsks = this.state.sellData.map((sell, index) => {
        return <li key={index}>
                <p className='sellPrice'>{sell.Rate}</p> 
                <p className='sellQuantity'>{sell.Quantity}</p>
              </li> 
      })

      let listOfBids = this.state.buyData.map((buy, index) => {
        return <li key={index}>                  
                <p className='buyQuantity'>{buy.Quantity}</p>                 
                <p className='buyPrice'>{buy.Rate}</p>
               </li>   
      })

      
    
    return (
      <div className="App">
          <div className='header'>
            <button onClick= { this.onClick }>BTC to LTC market</button>
            <button onClick= { this.componentDidMount }>BTC to ETH market</button>
            <h1>{this.state.market}</h1>
          </div>
          
            <div className='bid'>
              <h1>Bids</h1>
              <div>
                <h2 className='bidvolume'>volume</h2>
                <h2 className='bidpricepoint'>pricepoint</h2>
              </div>
              <ul className="bidlist">
                {listOfBids}
              </ul> 
            </div>
            <div className='ask'> 
              <h1 id='askh1'>Asks</h1>
              <h2 className='askpricepoint'>pricepoint</h2>
              <h2 className='askvolume'>volume</h2>
              <ul className='asklist'>
                {listOfAsks}
              </ul>

            
          </div>
      </div>
    );
  }
}

export default App;
