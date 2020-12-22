/*
* aes-crypto
* "author": "enmotion"
* version:1.0.0
*/
const aes = require('aes-js');

function AesCrypto(key){
    //验证正则，必须为16字符长度，限英文字母大小写，英文符号，数字
    const Reg= /^[a-z_A-Z0-9-\.!@#\$%\\\^&\*\)\(\+=\{\}\[\]\/",'<>~\·`\?:;|]{16,16}$/;
    let aesKey = []
    //创建aesKey,KEY必须为16长的字符串，且只能包含英文，数字，英文标点符号!
    if(key && key.constructor == String && key.match(Reg)){
        aesKey = createKey(key)
    }else {
        console.warn("ERROR:Crypto Key invalid,Expected String Type with 16 length,only allowed number or letter characters,got '"+key+"',so crypto can not working!");
        aesKey = null
    }  
    //生成密钥，所有字符转字符码，并创建16位数值的数组！
    function createKey(key){let code=[];for(var i in key){code.push(key[i].charCodeAt() + parseInt(i))};return code}
    //加密 对象入参字符出参
    function enCryptoStr(str){
        if(aesKey){      
            var textBytes = aes.utils.utf8.toBytes(str);
            var aesCtr = new aes.ModeOfOperation.ctr(aesKey, new aes.Counter(5));
            var encryptedBytes = aesCtr.encrypt(textBytes);
            var encryptedHex = aes.utils.hex.fromBytes(encryptedBytes);
            return encryptedHex;
        }else{
            return str
        }
    }
    function deCryptoStr(str){
        if(aesKey){
            var encryptedBytes = aes.utils.hex.toBytes(str);
            var aesCtr = new aes.ModeOfOperation.ctr(aesKey, new aes.Counter(5));
            var decryptedBytes = aesCtr.decrypt(encryptedBytes);
            var decryptedText = aes.utils.utf8.fromBytes(decryptedBytes);
            return decryptedText           
        }else{
            return str
        }
    }
    function enCryptoDataToStr(data){
        var str = JSON.stringify(data)
        return enCryptoStr(str);
    }
    //解密 字符入参对象出参
    function deCryptoStrToData(str){
        var objStr = deCryptoStr(str);
        try{
            var r = JSON.parse(objStr);           
            return r.constructor != String ? r : null;
        }catch(err){
            return null
        }
    }
    let crypto = {};
    Object.defineProperties(crypto,{
        hasCryptoKey:{value:aesKey?true:false,configurable:false,writable:false,enumerable:false},
        enCryptoStr:{value:enCryptoStr,configurable:false,writable:false,enumerable:false},
        deCryptoStr:{value:deCryptoStr,configurable:false,writable:false,enumerable:false},
        enCryptoDataToStr:{value:enCryptoDataToStr,configurable:false,writable:false,enumerable:false},
        deCryptoStrToData:{value:deCryptoStrToData,configurable:false,writable:false,enumerable:false}
    })
    Object.preventExtensions(crypto)
    return crypto
}
export default AesCrypto