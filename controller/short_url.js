'use strict';

const {encode, decode} = require('../service/short_url')
module.exports = {
    encode: async ctx=>{
        const url = ctx.request.query.url;
        const key = await encode(url);
        ctx.body = {
            code: 0,
            key,
        }
    },
    decode: async ctx=>{
        const key = ctx.request.ctx.params.key;
        const url = await decode(key);
        if(url){
            ctx.redirect(url);
            return;
        }
        ctx.body = {
            code: 1,
            message:`${ctx.request.href}不是合法的短链`
        }
    }
}
