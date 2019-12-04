import React, {Component} from 'react';
import {Panel} from 'rsuite';
import MenuAPI from './common/API'; 

class ProductsList extends Component {
	constructor(props){
		super(props);

		this.state = {
			products: [],
		}
	}

	componentDidMount(){
		MenuAPI.getProducts().then(res =>
			this.setState({
				products: res.data.results
			})
		);
	}

	render(){

		const {
			products
		} = this.state;

		const productItem = products.map(item => (
			<Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, margin: 20 }} key={item.id}>
		    <img src={item.photo.small} height="240" />
		    <Panel header={item.name}>
		      <p>
		        <small>Tienda: {item.store.name}</small>
		      </p>
		    </Panel>
		  </Panel>
		))

		return(
			<div>
				{productItem}
			</div>
			
		)
	}
}

export default ProductsList;