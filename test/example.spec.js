import ModCrypto from "../src"
//加密字符串
let AC1=new ModCrypto('SDRd!@#Areqd1234');
var beforStr = AC1.enCryptoStr("hello world!");
var afterStr = AC1.deCryptoStr(beforStr)
console.log(beforStr,afterStr);
//解密字符串
let AC2=new ModCrypto();
var beforStr2 = AC2.enCryptoStr("hello world!");
var afterStr2 = AC2.deCryptoStr(beforStr2)
console.log(beforStr2,afterStr2);
//加密对象
let AC3=new ModCrypto('SDRd!@#Areqd1234');
var beforStr3 = AC3.enCryptoDataToStr({name:"mod"});
var afterStr3 = AC3.deCryptoStrToData(beforStr3)
console.log(beforStr3,afterStr3);
//解密对象
let AC4=new ModCrypto('SDRd!@#Areqd1234');
var beforStr4 = AC4.enCryptoDataToStr("hello world!");
var afterStr4 = AC4.deCryptoStrToData(beforStr4);
console.log(beforStr4,afterStr4);