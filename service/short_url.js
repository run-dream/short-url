'use strict';

const sequelize = require('../model');

const numberToKey = number => {
    const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let key = '';
    while (number > 0) {
        const digit = number % digits.length;
        number = Math.floor(number / digits.length);
        key += digits[digit - 1];
    }
    return key;
}

module.exports = {
    encode: async url => {
        const shortUrl = await sequelize.models.ShortUrl.findOne({
            where: {
                url,
            }
        });
        if (shortUrl) {
            return shortUrl.key;
        }
        const newShortUrl = await sequelize.models.ShortUrl.create({
            url,
            key: '',
        });
        const key = numberToKey(newShortUrl.id);
        await newShortUrl.update({
            key,
        });
        return key;
    },
    decode: async key => {
        const shortUrl = await sequelize.models.ShortUrl.findOne({
            where: {
                key,
            }
        })
        return shortUrl ? shortUrl.url : '';
    }
}