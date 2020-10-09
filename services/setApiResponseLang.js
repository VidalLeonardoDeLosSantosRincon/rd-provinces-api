module.exports.setApiResponseLang = function(lang){
    let result = "en";
    if(lang !== undefined && lang.trim()!==""){
        lang = lang.toLowerCase().trim();
        if(lang === "es"){
            result = lang;
        }
    }
    return result;
}