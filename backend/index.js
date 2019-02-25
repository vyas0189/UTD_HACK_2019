const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
app.use(cors());

app.get('/:postalCode', async (req, res) => {
	const zipToLatLong = await fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params
			.postalCode}&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ`
	);

	const jsonData = await zipToLatLong.json();

	const location = {
		lat1: parseInt(jsonData.results[0].geometry.bounds.northeast.lat.toString().replace('.', '').substring(0, 8)),
		lng1: parseInt(jsonData.results[0].geometry.bounds.northeast.lng.toString().replace('.', '').substring(0, 9)),
		lat2: parseInt(jsonData.results[0].geometry.bounds.southwest.lat.toString().replace('.', '').substring(0, 8)),
		lng2: parseInt(jsonData.results[0].geometry.bounds.southwest.lng.toString().replace('.', '').substring(0, 9))
	};
	res.send(location);

	//(number).toFixed(6);
	// try {
	// 	const data = await fetch(
	// 		`https://www.zillow.com/search/GetResults.htm?spt=homes&status=110001&lt=111101&ht=111111&pr=,&mp=,&bd=0%2C&ba=0%2C&sf=,&lot=0%2C&yr=,&singlestory=0&hoa=0%2C&pho=0&pets=0&parking=0&laundry=0&income-restricted=0&fr-bldg=0&condo-bldg=0&furnished-apartments=0&cheap-apartments=0&studio-apartments=0&pnd=0&red=0&zso=0&days=any&ds=all&pmf=1&pf=1&sch=100111&zoom=10&rect=-95444508,29498727,-95253469,29596880&p=1&sort=globalrelevanceex&search=map&rid=92045&rt=7&listright=true&isMapSearch=1&zoom=10`
	// 	);
	// 	const houses = await data.json();
	// 	console.log('====================================');
	// 	console.log(houses);
	// 	console.log('====================================');
	// 	res.send(houses);
	// } catch (e) {
	// 	console.log(e.message);
	// }
	// res.send({ message: 'HEllo World' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, (e) => {
	console.log('Listening to port 5000');
});
