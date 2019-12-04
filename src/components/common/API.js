import axios from 'axios';

let filters = "";

function getCookie(name) {
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return value != null ? unescape(value[1]) : null;
}

const MenuAPI = {
	getCategories: function(){
		return axios.get("https://canastarosa.com/services/api/v1/market/categories/").then(res=>{
			return res
		}).catch(err => console.log(err));
	},

}

export default MenuAPI;
export { getCookie };