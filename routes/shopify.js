var express = require('express');
var router = express.Router();
const Shopify = require('shopify-api-node');



const shopify = new Shopify({
  shopName: 'turtles-playground',
  apiKey: '8387b0a7e2fb36c5c147e01abf02b76d',
  password: 'a6cfc15429faeeda4fd0539ba030c021'
});


router.get('/', function(req, res, next) {
	// id = 187846020
	//theme-store-id: 796
	// page-id: 258448900

	shopify.page.list()
  	 .then(function(data){
  	 	res.send(data);
  	 })
 	 .catch(err => console.error(err));

});

module.exports = router;