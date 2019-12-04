import axios from 'axios';

let filters = "";

const MenuAPI = {
	getCategories: function(){
		return axios.get("https://canastarosa.com/services/api/v1/market/categories/").then(res=>{
			return res
		}).catch(err => console.log(err));
	},

	getProducts: function(params){
		(typeof params !== undefined) && (filters = params)
		return axios.get("https://canastarosa.com/services/api/v1/market/products/" + params).then(res => {
			return res
		}).catch(err => console.log(err));
	},

}

export default MenuAPI;