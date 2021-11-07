const proxy = require('http-proxy-middleware')

module.exports = function(app){
	app.use(
		proxy('/api',{ 
			target:'http://1.14.74.79:9090', 
			changeOrigin:true,
			pathRewrite:{'^/api':''} 
		})
	)
}