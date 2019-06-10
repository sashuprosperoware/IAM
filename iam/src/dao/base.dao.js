
import * as mongodb from 'mongodb';
import * as config from '../config/app.config';
import * as dbutils from '../utils/dbutils';

var mongoClient = mongodb.MongoClient;
var cachedDb = null;

export async function database(){
    if(cachedDb && cachedDb.serverConfig.isConnected()){
        console.log("Using CachedDb");
        return Promise.resolve(cachedDb);
    }

    let mongoConfig = config.mongo;
    let connectionUrl = dbutils.mongoConnectionUrl(mongoConfig.host,mongoConfig.port,mongoConfig.user,mongoConfig.password,mongoConfig.authdb);
    let dbName = mongoConfig.database;

    const client = await mongoClient.connect(connectionUrl, { useNewUrlParser: true });
    cachedDb = client.db(dbName);
    return cachedDb;
}