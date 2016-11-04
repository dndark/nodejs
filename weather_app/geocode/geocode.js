const request = require('request');

var geocodeAddress = (address, callback) =>{
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    },(err, response, body) => {
        if (err){
            callback("cannot connect to server")
        }else if (body.status === "ZERO_RESULTS"){
            callback('unable to find that address');
        }else if (body.status === "OK"){
            callback(underfind,{
                address:body.results[0].formatted_address;
                latitude:body.results[0].geometry.location.lat;
                lngtitude:body.results[0].geometry.location.lng;
            })
        }
    });
}

module.exports = {
    geocodeAddress
};
