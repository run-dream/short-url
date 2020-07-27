'use strict';

const KoaRouter = require('koa-router');
const fs = require('fs');
const path = require('path');

const router = new KoaRouter();
const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js');
for (const file of files) {
    require(path.join(__dirname, file))(router)
}

module.exports = router;