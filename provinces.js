(function(){
    const {data} = require("./data/data.json");
    const {data_en_model_simplified} = require("./model/data_en_model");
    const {data_es_model, data_es_model_simplified} = require("./model/data_es_model");
    
    //get all provinces
    module.exports.getAllProvinces = function(lang, simplified){
        let result = [];
        if(lang === "en" && simplified === true){
            data.provinces.map((province)=>{
            result.push(data_en_model_simplified(province.code, province.name, province.coordinates))
            })
        }else if(lang === "en" && simplified === false){
        result = data.provinces;
        }else if(lang === "es" && simplified === true){
        data.provinces.map((province)=>{
            result.push(
                data_es_model_simplified(province.code, province.name, province.coordinates)
            );
        })
        }else if(lang === "es" && simplified === false){
        data.provinces.map((province)=>{
            result.push(
                data_es_model(province.code, province.name, province.region, province.coordinates, province.main_municipality, province.municipalities)
            );
        })
        }
        return result;
    };

    //get a province by code
    module.exports.getProvinceByCode = function(code, lang, simplified){
        let result = [];
        if(lang === "en" && simplified === true){
            data.provinces.map((province)=>{
                result.push(data_en_model_simplified(province.code, province.name, province.coordinates))
            })
        }else if(lang === "en" && simplified === false){
            result = data.provinces;
        }else if(lang === "es" && simplified === true){
            data.provinces.map((province)=>{
                result.push(
                    data_es_model_simplified(province.code, province.name, province.coordinates)
                );
            })
        }else if(lang === "es" && simplified === false){
            data.provinces.map((province)=>{
                result.push(
                    data_es_model(province.code, province.name, province.region, province.coordinates, province.main_municipality, province.municipalities)
                );
            })
        }


        if(lang === "es"){
            return result.filter((x)=>{
                return x.codigo === parseInt(code);
            });            
        }
        return result.filter((x)=>{
            return x.code === parseInt(code);
        });
    };
     
    //get a province by name
    module.exports.getProvinceByName = function(name, lang, simplified){
        let result = [];
        if(lang === "en" && simplified === true){
            data.provinces.map((province)=>{
                result.push(data_en_model_simplified(province.code, province.name, province.coordinates))
            })
        }else if(lang === "en" && simplified === false){
            result = data.provinces;
        }else if(lang === "es" && simplified === true){
            data.provinces.map((province)=>{
                result.push(
                    data_es_model_simplified(province.code, province.name, province.coordinates)
                );
            })
        }else if(lang === "es" && simplified === false){
            data.provinces.map((province)=>{
                result.push(
                    data_es_model(province.code, province.name, province.region, province.coordinates, province.main_municipality, province.municipalities)
                );
            })
        }


        const removeAccents = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        } 

        if(lang === "es"){   
            return result.filter((x)=>{
                return removeAccents(x.nombre).toLowerCase().includes(name.toLowerCase());
            }); 
        }

        return result.filter((x)=>{
            return removeAccents(x.name).toLowerCase().includes(name.toLowerCase());
        });
    };

})();