import * as enrty from './entry';
import * as TestData from './test/api-events.data';


let registerConsumerMobile = enrty.handler(TestData.registerConsumerMobile, {});
registerConsumerMobile.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});

let registerConsumerConfirm = enrty.handler(TestData.registerConsumerConfirm, {});
registerConsumerConfirm.then(function(confirmData){
    console.log(confirmData);
}).catch(function(err){
    console.log(err);
});


