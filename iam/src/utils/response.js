

exports.ok = function(body){
    var response = {
        statusCode: 200,
        body: JSON.stringify(body)
      };
    return response;
}

exports.error = function(code, body){
    var response = {
        statusCode: code,
        body: JSON.stringify(body)
      };
    return response;
}

exports.error_404 = function(){
  var response = {
      statusCode: 404,
      body: JSON.stringify({"msg" : "Not Found"})
    };
  return response;
}