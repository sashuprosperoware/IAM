import * as userDAO from '../dao/user.dao';
import * as serviceResponse from '../utils/response';

export async function registerConsumerMobile(event){
    let user = JSON.parse(event.body);
    var result = null;
    try{
        let existingUser = await userDAO.findByMobile(user.mobile);
        if(existingUser){
            result = serviceResponse.validationError("User already exists");
        }else{
            result = await userDAO.createUser(user);
        }
    }catch(err){
        result = serviceResponse.serverError(err, err);
    }

    return result;
}

export async function registerConsumerConfirm(event){
    let payload = JSON.parse(event.body);
    let otp = payload.otp;
    if(otp == '1234'){
        return userDAO.validateAndRegister(payload);
    }else{
        let error = {"error" : "Invalid OTP"};
        return error;
    }
}
