/*
    Informasi File
    ---------------

    ini merupakan file yang digunakan untuk global mixins di vue js, silakan tambahkan method
    dibawah jika ingin membuat mixin baru. Namun untuk function silahkan import dari file terpisah
    dalam folder file ini.

*/
import fetchLangData from './fetchLanguageData';
import * as api from './apirequest';
export default {
  methods: {
    async fetchLanguageData() {
      try {
        this.lang = await fetchLangData();
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    },
    encode(data){
        let encode = btoa(data);
        return encode;
    },
    decode(data){
        let decode = atob(data);
        return decode;
    },
    async apiget(url,auth,inthis){
      return await api.apiget(url,auth,inthis);
    },
    async apiput(url,auth,data,inthis){
      return await api.apiput(url,auth,data,inthis);
    },
    async apipost(url,auth,data,inthis){
      return await api.apipost(url,auth,data,inthis);
    }
    // fungsi lainnya di sini
  }
}