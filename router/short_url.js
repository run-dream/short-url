'use strict';
const {encode,decode} = require('../controller/short_url')
module.exports = (router)=>{
    router.get('/encode', encode);
    router.get('/:key', decode);
}