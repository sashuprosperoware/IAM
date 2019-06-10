import regeneratorRuntime from "regenerator-runtime/runtime";

import * as response from './utils/response';
import * as registrationService from './services/registration.services';



exports.handler = async (event, context) => {

    /*********************************************************
     * Mandatory Steps to Set up - Lambda Specific Settings
     ********************************************************/

    /**
     * This freezes node event loop when callback is invoked
     */
    context.callbackWaitsForEmptyEventLoop = false;

    let method = event.httpMethod;
    let path = event.path;

    let apiPath = method.concat(':').concat(path);
    var result = null;
    switch(apiPath){
        case "POST:/v1/iam/registration/consumer/request":
             result = await registrationService.registerConsumerMobile(event);
             break;
        case "POST:/v1/iam/registration/consumer/confirm":
             result = await registrationService.registerConsumerConfirm(event);
             break;
        default:
            result = response.error404();
    }

    return result;
}