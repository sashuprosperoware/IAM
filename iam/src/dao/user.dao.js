


module.exports.createUser = function(user){
    user.id = 1;
    return user;
}

module.exports.validateAndRegister = function(user){
    user.id = 2;
    user.mobile_valid = true;
    return user;
}