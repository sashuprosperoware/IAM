import * as error from "../config/error.config";

export function validationError(errorMsg){
  return validationErrorWithMsgAndList(errorMsg, null);
}

export function validationErrorWithList(errors){
  return validationErrorWithMsgAndList("Please remove validation error(s)", errors);
}

export function validationErrorWithMsgAndList(errorMsg, errors){
  var responseBody = responseData(null, error.VALIDATION_ERROR, errorMsg , errors);
  var response = {
    statusCode: 400,
    body: JSON.stringify(responseBody)
  };
  return response;
}

export function businessError(errorMsg){
  return businessErrorWithBodyAndCode(null, null, errorMsg);
}

export function businessErrorWithBody(body, errorMsg){
  return businessErrorWithBodyAndCode(body, null, errorMsg);
}

export function businessErrorWithBodyAndCode(body, code, errorMsg){
  var responseBody = responseData(body, code, errorMsg, []);
  var response = {
    statusCode: 400,
    body: JSON.stringify(responseBody)
  };
  return response;
}

export function serverError(body, errorMsg){
  var responseBody = responseData(body, error.SERVER_ERROR, errorMsg, []);
  var response = {
    statusCode: 500,
    body: JSON.stringify(responseBody)
  };
  return response;
}

export function ok(body){
    var responseBody = responseData(body, null, null, []);
    var response = {
        statusCode: 200,
        body: JSON.stringify(responseBody)
      };
    return response;
}

export function httpError(httpcode, body){
    var responseBody = responseData(body, null, null, []);
    var response = {
        statusCode: httpcode,
        body: JSON.stringify(responseBody)
      };
    return response;
}

export function error404(){
  var responseBody = responseData(body, error.NOT_FOUND, "Resource Not Found", []);
  var response = {
      statusCode: 404,
      body: JSON.stringify(responseBody)
    };
  return response;
}

export function responseData(data, errorCode, errorMessage, errors){
  return {
    "data" : data,
    "errorCode" : errorCode,
    "errorMessage" : errorMessage,
    "errors" : errors
  }
}