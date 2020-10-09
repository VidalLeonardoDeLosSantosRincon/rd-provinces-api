(function(){
    const express = require("express");
    const app = express();
    const port = process.env.PORT || 3050;
    //const connection = require("./DBconnection");
    const {getAllProvinces, getProvinceByCode, getProvinceByName} = require("./provinces");
    const { setApiReponseLang } = require("./services/setApiResponseLang");
    const { simplifiedApiReponse} = require("./services/simplifiedApiResponse");
    
    app.use(express.json());

    //routes
    app.get("/", (request, response)=>{
        let lang = setApiReponseLang(request.query.lang);
        let simplified = simplifiedApiReponse(request.query.simplified);
        response.send(
            getAllProvinces(lang, simplified)
        );
    });

    app.get("/provinces", (request, response)=>{
        let lang = setApiReponseLang(request.query.lang);
        let simplified = simplifiedApiReponse(request.query.simplified);
        response.send(
            getAllProvinces(lang, simplified)
        );          
    });

    app.get("/provinces/:code", (request, response)=>{
        let lang = setApiReponseLang(request.query.lang);
        let simplified = simplifiedApiReponse(request.query.simplified);
        let code = request.params.code;
        response.send(
            getProvinceByCode(code, lang, simplified)
        );
    });

    app.get("/provinces/code/:code", (request, response)=>{
        let lang = setApiReponseLang(request.query.lang);
        let simplified = simplifiedApiReponse(request.query.simplified);
        let code = request.params.code;
        response.send(
            getProvinceByCode(code, lang, simplified)
        );
    });

    app.get("/provinces/name/:name", (request, response)=>{
        let lang = setApiReponseLang(request.query.lang);
        let simplified = simplifiedApiReponse(request.query.simplified);
        let name = request.params.name;
        response.send(
            getProvinceByName(name, lang, simplified)
        );
    });

    app.listen(port, ()=>{
        console.log(`Server started in port: ${port}`);
    });     
})();