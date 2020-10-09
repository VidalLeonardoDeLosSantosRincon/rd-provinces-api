module.exports.simplifiedApiResponse = function(simplified){
    let result = false;
    if(simplified !== undefined && simplified.trim()!==""){
        if(simplified.trim()==="true"){
            result = true;
        }
    }
    return result;
}