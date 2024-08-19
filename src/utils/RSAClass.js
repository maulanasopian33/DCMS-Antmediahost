import axios from "axios";
import CryptoJS from 'crypto-js';

export function getKey(self){
    let url = import.meta.env.VITE_APIBASE
    let token = self.$storage.getStorageSync("token")
    let header = {
        headers: {
        'Authorization': `Bearer ${token}` 
        }
    }
    axios.get(url+'create/rsa', header).then(({data})=>{
        localStorage.setItem('prvtk', data.data)
    })
}
export function getKeyClient(self){
    let url = import.meta.env.VITE_APIBASE
    axios.get(url+'create/rsaClient').then(({data})=>{
        localStorage.setItem('prvtk', data.data)
    })
}

export function decrypt(data){
    let encode = atob(data)
    let decrypt = JSON.parse(CryptoJS.AES.decrypt(encode, localStorage.getItem('prvtk'), {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8))
    return decrypt;
}

var CryptoJSAesJson = {
    stringify: function (cipherParams) {
        var j = {ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};
        if (cipherParams.iv) j.iv = cipherParams.iv.toString();
        if (cipherParams.salt) j.s = cipherParams.salt.toString();
        return JSON.stringify(j);
    },
    parse: function (jsonStr) {
        var j = JSON.parse(jsonStr);
        var cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.ct)});
        if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
        if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
        return cipherParams;
    }
}