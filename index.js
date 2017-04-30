var smsparser = require('./lib/smsparser'),
    validate = require('./lib/validate');

exports.merge = smsparser.merge;
exports.parse = smsparser.parse;
exports.getFormCode = smsparser.getFormCode;
exports.validate = validate.validate;
