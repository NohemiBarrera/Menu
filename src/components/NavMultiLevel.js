import React,{Component}  from 'react';
import {Nav, Dropdown, Input} from 'rsuite';
import MenuAPI from './common/API';
import { Link } from "react-router-dom";

class NavMultiLevel extends Component {
	constructor(props){
		super(props);

		this.state={
			categories: [],
		}

	}

	componentDidMount(){
		MenuAPI.getCategories().then(res =>
			this.setState({
				categories: res.data
			})
		);
	}

	render(){

		const{
			categories
		} = this.state;

console.log(this.state)
    const categoryItem = categories.map(category => (
      <Dropdown.Item key={category.slug}>
      	<Link to={"" + props.data.id} className="btn btn-sm btn-primary">
          <span className="">{category.name}</span>
				</Link>
			</Dropdown.Item>
    ));

		

		return(
		  <div>
		    <Nav>
		    	<Nav.Item>Canasta Rosa</Nav.Item>
		      <Dropdown title="Categorías">
		      	{categoryItem}
		        
		      </Dropdown>
		      <Nav.Item><Input style={{ width: 300 }} placeholder="Buscar Producto" size="xs" /></Nav.Item>
		    </Nav>
		  </div>
		)
	}
} 

export default NavMultiLevel; 