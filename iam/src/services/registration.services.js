import * as UserDAO from '../dao/user.dao';

module.exports.registerConsumerMobile = function(event){
    let payload = JSON.parse(event.body);
    return UserDAO.createUser(payload);
}

module.exports.registerConsumerConfirm = function(event){
    let payload = JSON.parse(event.body);
    let otp = payload.otp;
    if(otp == '1234'){
        return UserDAO.validateAndRegister(payload);
    }else{
        let error = {"error" : "Invalid OTP"};
        return error;
    }
}
