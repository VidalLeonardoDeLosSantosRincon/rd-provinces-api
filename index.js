(function(){
    const express = require("express");
    const app = express();
    const port = process.env.PORT || 3050;
    //const connection = require("./DBconnection");
    const {
        getAllProvinces,
        getProvinceByCode,
        getProvinceByName
        } = require("./provinces");

    app.use(express.json());

    //routes
    app.get("/", (request, response)=>{
        response.send(getAllProvinces());
    });

    app.get("/provinces", (request, response)=>{
        response.send(getAllProvinces());
    });

    app.get("/provinces/:code", (request, response)=>{
        response.send(getProvinceByCode(request.params.code));
    });

    app.get("/provinces/code/:code", (request, response)=>{
        response.send(getProvinceByCode(request.params.code));
    });

    app.get("/provinces/name/:name", (request, response)=>{
        response.send(getProvinceByName(request.params.name));
    });

    app.listen(port, ()=>{
        console.log(`Server started in port: ${port}`);
    });     
})();