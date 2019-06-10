import * as enrty from './entry';
import * as TestData from './test/api-events.data';

async function test(){
    let result = await enrty.handler(TestData.registerConsumerMobile, {});
    console.log(result);
}

test();


