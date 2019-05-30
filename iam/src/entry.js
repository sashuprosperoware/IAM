import regeneratorRuntime from "regenerator-runtime/runtime";

import * as response from './utils/response';
import * as RegistrationService from './services/registration.services';


exports.handler = async (event, context) => {
    let method = event.httpMethod;
    let path = event.path;

    let apiPath = method.concat(':').concat(path);

    switch(apiPath){
        case "POST:/v1/iam/registration/consumer/request":
            var result = RegistrationService.registerConsumerMobile(event);
            return response.ok(result);
        case "POST:/v1/iam/registration/consumer/confirm":
            var result = RegistrationService.registerConsumerConfirm(event);
            return response.ok(result);
        default:
            return response.error_404();
    }
}