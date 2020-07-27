'use strict';

const { DataTypes, Model } = require('sequelize');

class ShortUrl extends Model { };

module.exports = (sequelize) => {
    ShortUrl.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: '主键'
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '长连接'
        },
        key: {
            type: DataTypes.STRING(10),
            allowNull: false,
            comment: '短链接关键字'
        },
        createAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            field: 'create_at',
            comment: '创建时间'
        }
    }, {
        sequelize,
        modelName: 'ShortUrl',
        tableName: 'short_url',
        indexes: [{
            name: 'idx_url',
            fields: ['url'],
        }, {
            name: 'idx_key',
            fields: ['key']
        }]
    })
    return sequelize;
}

