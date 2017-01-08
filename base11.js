/**
 * Created by shagun on 8/1/17.
 */
var numans="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
var base=numans.length;

//encoding the url
function encode(num){
    var encoded = '';
    while (num){
        var remainder = num % base;
        num = Math.floor(num / base);
        encoded = numans[remainder].toString() + encoded;
    }
    return encoded;
}

//decoding the url
function decode(str){
    var decoded = 0;
    while (str){
        var index = numans.indexOf(str[0]);
        var power = str.length - 1;
        decoded += index * (Math.pow(base, power));
        str = str.substring(1);
    }
    return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;