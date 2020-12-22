# mod-crypto
JavaScript library of aes crypto standards. runing in browser and server
width mini size.
---

### Node.js (install)

Requirements: </br>
 Node.js  </br>
 npm
```
npm install --save mod-crypto
```
---
#### Usage
ES6 import for typical API call signing use case :
```
import ModCrypto from "mod-crypto"

/* enCrypto & deCrypto String with CryptoKey
*  CryptoKey expect String 16length,only number or letter characters
*  if you typing wrong value of CryptoKey ,crypto won't be working
*/
let AC1=new ModCrypto('SDRd!@#Areqd1234');
var beforStr = AC1.enCryptoStr("hello world!");
var afterStr = AC1.deCryptoStr(beforStr)
console.log(beforStr,afterStr);// "hello world!","hello world!"

// enCrypto & deCrypto String without CryptoKey
let AC2=new ModCrypto();// console.warn wrong key
var beforStr2 = AC2.enCryptoStr("hello world!"); //crypto won't be working
var afterStr2 = AC2.deCryptoStr(beforStr2)
console.log(beforStr2,afterStr2);// "hello world!","hello world!"

// enCrypto & deCrypto Object with CryptoKey
let AC3=new ModCrypto('SDRd!@#Areqd1234');
var beforStr3 = AC3.enCryptoDataToStr({name:"mod"});
var afterStr3 = AC3.deCryptoStrToData(beforStr3)
console.log(beforStr3,afterStr3);
```

-------

#### API

##### new ModCrypto(CryptoKey); </br>
###### CryptoKey : </br>
expect String 16 length,only English number or letter characters. if setup with wrong value, crypto will not working!

---
##### [instance].enCryptoStr(string); </br>
###### string : </br>
enCrypto String message

---
##### [instance].dnCryptoStr(CryptedString); </br>
###### CryptedString : </br>
dnCrypto CryptedString message

---
##### [instance].enCryptoDataToStr(string); </br>
###### string : </br>
enCrypto [Object Array Boolean]  message ,return CryptedString

---
##### [instance].deCryptoStrToData(CryptedString); </br>
###### CryptedString : </br>
input CryptedString return dnCrypto [Object Array Boolean] message</br>
but if message can't deCrypto as [Object Array Boolean]
</br> return null

```
import ModCrypto from "mod-crypto"

let AC3=new ModCrypto('SDRd!@#Areqd1234');
var beforStr3 = AC3.enCryptoDataToStr({name:"mod"});
var afterStr3 = AC3.deCryptoStrToData(beforStr3)

console.log(beforStr3,afterStr3); // 6552505ff6965eeee2e9e0dd3342 , {name:"mod"}

var beforStr4 = AC3.enCryptoDataToStr("hello world!");
var afterStr4 = AC3.deCryptoStrToData(beforStr3)

console.log(beforStr4,afterStr4); // 3c185b52f79c5ca3aff6e3dd301d , null
```