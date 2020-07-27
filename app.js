'use strict';

const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();
const router = require('./router');
const sequelize = require('./model');
sequelize.sync().then(() => {
    app
    .use(koaBody())
    .use(router.routes())
    .listen(7001);
    console.log('listen 7001')
})