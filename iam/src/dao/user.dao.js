import {database} from "./base.dao"; 

export async function createUser(user){
    const db = await database();
    return await db.collection('user').insertOne(user);
}

export async function findByMobile(mobile){
    const db = await database();
    return await db.collection('user').findOne({"mobile" : mobile});
}

export function validateAndRegister(user){
    user.id = 2;
    user.mobile_valid = true;
    return user;
}