import React, {Component} from 'react';
import {Panel, Pagination, Input, Row, Col, Button} from 'rsuite';
import MenuAPI from './common/API'; 


class ProductsList extends Component {
	constructor(props){
		super(props);

		this.state = {
			products: [],
			currentPage: 1,
			totalPages: 1,
			category__slug: "",
			min_price: "",
			max_price: "",
			pages: 1

		}

		this.changePage = this.changePage.bind(this);
		this.onCategoryChange = this.onCategoryChange.bind(this);
		this.onMinPriceChange = this.onMinPriceChange.bind(this);
		this.onMaxPriceChange = this.onMaxPriceChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
	}

	componentDidMount(){
		const params = "?page=1"
		MenuAPI.getProducts(params).then(res =>
			this.setState({
				products: res.data.results,
				currentPage: res.data.page,
				totalPages: res.data.npages,
				pages: res.data.pages
			})
		);
	}

	onSearch(e){
		 e.preventDefault();
    const params =  
   	"?category__slug=" + this.state.category__slug + 
   	"&min_price=" + this.state.min_price + 
   	"&max_price=" + this.state.max_price;

    MenuAPI.getProducts(params).then(res =>
      this.setState({
        products: res.data.results,
        totalPages: res.data.npages,
        currentPage: res.data.page
      })
    )
	}


	onCategoryChange(e) {
    this.setState({category__slug: e});
  }

  onMinPriceChange(e) {
    this.setState({min_price: e});
  }

  onMaxPriceChange(e) {
    this.setState({max_price: e});
  }


   changePage(page) {
   	const params = 
   	"?page=" + page + 

		MenuAPI.getProducts(params).then(res =>
			this.setState({
				products: res.data.results,
				currentPage: res.data.page,
				totalPages: res.data.npages,
			})
		)

    this.setState({
      currentPage: page
    });
  }

	render(){

		const {
			products,
			currentPage,
			totalPages,
			category__slug,
			min_price,
			max_price,
			pages
		} = this.state;

		const displayedPages = pages.length;

		const productItem = products.map(item => (
			<Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, margin: 20 }} key={item.id}>
		    <img src={item.photo.small} height="240" />
		    <Panel header={item.name}>
		      <h6>{item.store.name} </h6>
		      <p>${item.price}</p>
		    </Panel>
		  </Panel>
		))

		return(
			<div>
				<h6 style={{ marginTop: 20}}>Buscar Productos</h6>
				<Row className="show-grid" style={{marginBottom: 20}}>
		      <Col xs={24} sm={24} md={7} >
		       <Input 
		       	placeholder="Categoría" 
		       	size="xs" 
		       	value={category__slug} 
		       	name="category__slug" 
		       	id="category__slug"
		       	onChange={this.onCategoryChange}/>
		      </Col>
		      <Col xs={24} sm={24} md={7}>
		       <Input 
		       	placeholder="Precio mínimo" 
		       	size="xs" 
		       	value={min_price} 
		       	name="min_price"
		       	onChange={this.onMinPriceChange}/>
		      </Col>
		      <Col xs={24} sm={24} md={7}>
		       <Input 
		       	placeholder="Precio máximo" 
		       	size="xs" 
		       	value={max_price} 
		       	name="max_price"
		       	onChange={this.onMaxPriceChange}/>
		      </Col>
		      <Col  xs={24} sm={24} md={3}>
		      	<Button appearance="primary" size="xs" onClick={this.onSearch}>Buscar</Button>
		      </Col>
		    </Row>
				
				{productItem}
				<Pagination
          prev
          last
          next
          first
          size="lg"
          pages={displayedPages}
          activePage={this.state.currentPage}
          onSelect={this.changePage}
          style={{marginTop: 20, marginBottom: 20}}
        />
			</div>
			
		)
	}
}

export default ProductsList;