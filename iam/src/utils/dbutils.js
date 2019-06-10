

export function mongoConnectionUrl(host, port, user, pass, authdb){
    let url = "mongodb://".concat(user).concat(":").concat(pass).concat("@").concat(host).concat(":").concat(port).concat("/?authSource=").concat(authdb);
    console.log("Connecting URL : "+url);
    return url;
}