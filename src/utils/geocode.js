const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FuamVldjE5OTYiLCJhIjoiY2tqaWVxcXRtMWc1ajJ4cGczajcxY2V2aiJ9.a7ecUjgPYXrNJGPPVPXH7g&limit=1'

    request ({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Geo Locating Service', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find location. Try Another Location', undefined)
        }
        else {
            callback(undefined, {

                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            }
            )
        }
    })
}

module.exports = geocode