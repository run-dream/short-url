'use strict';

const { Sequelize } = require('sequelize');
const config = require('../config/database.config')
const fs = require('fs');
const path = require('path');
const sequelize = new Sequelize(config);
const models = fs.readdirSync(__dirname).filter(file => file !== 'index.js');
for (const model of models) {
    require(path.join(__dirname, model))(sequelize)
}

module.exports = sequelize;