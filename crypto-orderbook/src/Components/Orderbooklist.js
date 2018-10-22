import React, { Component } from 'react';
import axios from 'axios'

class Orderbooklist extends Component {

	constructor(props){
		super(props)

	this.state = {
		orderbook: []
	};
	this.componentDidMount = this.componentDidMount.bind(this)
}

	componentDidMount() {
		axios.get('http://localhost:3001/api/bittrex')
			.then(res => this.setState({
				orderbook: res.data
			}));
			console.log(this.state.orderbook)
	}

	// renderOrderBook() {
	// 	console.log(this.state.orderbook.asks)
	// 	return this.state.orderbook.asks.map(order =>
	// 		<li>need a name</li>
	// 		);
	// }
	render () {
		console.log(this.state)
		
		let listOfOrders = this.state.orderbook.asks.map((order, index) => {
			return <li key={index}>
								<p>{order}</p>
							</li>	
		})
		return (
			<div>
				<p>hello</p>
				<ul>{listOfOrders}</ul>
			</div>
			);
	}
}

export default Orderbooklist;