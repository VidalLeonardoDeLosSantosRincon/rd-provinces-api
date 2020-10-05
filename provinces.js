(function(){
    const {data} = require("./data.json");

    //get all provinces
    module.exports.getAllProvinces = function(){
        return data.provinces;
    };

    //get a province by code
    module.exports.getProvinceByCode = function(code){
        return data.provinces.filter((x)=>{
            return x.code === parseInt(code);
        });
    };
     
    //get a province by name
    module.exports.getProvinceByName = function(name){

        const removeAccents = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        } 

        return data.provinces.filter((x)=>{
            return removeAccents(x.name).toLowerCase().includes(name.toLowerCase());
        });
    };

})();