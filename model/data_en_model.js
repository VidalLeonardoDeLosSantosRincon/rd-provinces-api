(function(){
    module.exports.data_en_model = function(code, name, region, coordinates, main_municipality, municipalities ){
        return {
            code: code,
            name: name,
            region: region,
            coordinates: {
                longitude: coordinates.longitude,
                latitude: coordinates.latitude
            },
            main_municipality: main_municipality,
            municipalities: municipalities
        }
    }

    module.exports.data_en_model_simplified = function(code, name, coordinates){
        return{
            code: code,
            name: name,
            coordinates: {
                longitude: coordinates.longitude,
                latitude: coordinates.latitude
            }
        }
    }
})();

