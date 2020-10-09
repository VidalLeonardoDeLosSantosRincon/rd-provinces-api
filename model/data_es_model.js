(function(){
    module.exports.data_es_model = function(codigo, nombre, region, coordenadas, municipio_cabecera, municipios ){
        return {
            codigo: codigo,
            nombre: nombre,
            "región": region,
            coordenadas: {
                longitud: coordenadas.longitude,
                latitud: coordenadas.latitude
            },
            municipio_cabecera: municipio_cabecera,
            municipios: municipios
        }
    }

    module.exports.data_es_model_simplified = function(codigo, nombre, coordenadas){
        return {
            codigo: codigo,
            nombre: nombre,
            coordenadas: {
                longitud: coordenadas.longitude,
                latitud: coordenadas.latitude
            }
        };
    }
})();