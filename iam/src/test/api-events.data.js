module.exports.registerConsumerMobile = {
    "body": JSON.stringify({
        "mobile" : "8800283747",
        "first_name" : "Sushant",
        "last_name" : "Ashu"
    }),
    "resource": "/{proxy+}",
    "path": "/v1/iam/registration/consumer/request",
    "httpMethod": "POST",
    "isBase64Encoded": false,
    "queryStringParameters": {},
    "pathParameters": {},
    "stageVariables": {},
    "headers": {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, sdch",
      "Accept-Language": "en-US,en;q=0.8",
      "Cache-Control": "max-age=0",
      "User-Agent": "Custom User Agent String"},
    "requestContext": {
      "resourcePath": "/{proxy+}",
      "httpMethod": "POST",
      "protocol": "HTTP/1.1"
    }
}

module.exports.registerConsumerConfirm = {
    "body": JSON.stringify({
        "mobile" : "8800283747",
        "first_name" : "Sushant",
        "last_name" : "Ashu",
        "otp" : "1234"
    }),
    "resource": "/{proxy+}",
    "path": "/v1/iam/registration/consumer/confirm",
    "httpMethod": "POST",
    "isBase64Encoded": false,
    "queryStringParameters": {},
    "pathParameters": {},
    "stageVariables": {},
    "headers": {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, sdch",
      "Accept-Language": "en-US,en;q=0.8",
      "Cache-Control": "max-age=0",
      "User-Agent": "Custom User Agent String"},
    "requestContext": {
      "resourcePath": "/{proxy+}",
      "httpMethod": "POST",
      "protocol": "HTTP/1.1"
    }
}