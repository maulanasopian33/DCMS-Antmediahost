<template>
    <div>
        <vue-final-modal v-model="showModal">
            <div class="flex justify-center items-center h-screen">
                <div
                    class="bg-white w-fit md:w-[40%] m-5 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                    <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg>
                    <div class="text-center">
                        <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Email Terkirim</h3>
                        <p class="text-gray-600 my-2">Silahkan mengecek email untuk mendapatkan link request visit Data Center</p>
                        <div class="py-10 text-center">
                            <router-link to="/">
                                <a href="#" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                    GO BACK 
                            </a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

        </vue-final-modal>
        <div class="relative py-10 bg-gradient-to-br from-sky-50 to-gray-200 w-full h-screen">
            <div class="relative container m-auto px-6 text-gray-500 md:px-10 xl:px-40">
                <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div class="rounded-xl bg-white shadow-xl">
                        <div class="p-6 sm:p-16">
                            <div class="space-y-4 sm:text-center">
                                <img src="../assets/logo.svg"
                                    loading="lazy" class="w-1/2" alt="tailus logo">
                                <h2 class="mb-8 text-3xl text-cyan-900 font-bold">Visit Data Center <br> <span
                                        class="text-[18px] font-light">Silahkan memasukan alamat email valid</span></h2>
                            </div>
                            <div class="mt-16 grid space-y-4">
                                <div>
                                    <input type="text" v-model="mydata.name" id="name"
                                        placeholder="Masukan Nama Lengkap" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                        required>
                                </div>
                                <div>
                                    <input type="email" v-model="mydata.email" id="email"
                                        placeholder="Masukan alamat email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                        required>
                                </div>
                                <button @click="sendemail()" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-orange-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div class="relative flex items-center space-x-4 justify-center">
                                        <span
                                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-orange-600 sm:text-base">Kirim Permintaan</span>
                                    </div>
                                </button>
                                <span></span>
                            </div>

                            <div class="mt-20 space-y-4 text-gray-600 text-center sm:-mb-8">
                                <p class="text-xs">By proceeding, you agree to our <a href="#" class="underline">Terms
                                        of Use</a> and confirm you have read our <a href="#" class="underline">Privacy
                                        and Cookie Statement</a>.</p>
                                <p class="text-xs">This site is protected by reCAPTCHA and the <a href="#"
                                        class="underline">Google Privacy Policy</a> and <a href="#"
                                        class="underline">Terms of Service</a> apply.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal';
export default {
    name : 'requestemail',
    components: {
                VueFinalModal
            },
    data() {
        return {
            showModal   : false,
            url         : import.meta.env.VITE_APIBASE,
            mydata      : {},
            loader      : null,
        }
    },
    created() {
        
    },
    methods: {
        async sendemail(){
            this.loader = this.$loading.show({container: null,canCancel: false,});
            this.mydata['url'] = window.location.origin + "/visit/request/"+ this.generateurl()
            let data = await this.apipost('request/visit','',this.mydata,this);
            if(data['status']){
                this.$notify({
                    title: 'Berhasil',
                    text: data.message,
                    type: 'success',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
                this.loader.hide()
            }
            this.showModal = true
        },
        generateurl(){
            const timestamp = new Date().getTime();
            let data = JSON.stringify(this.mydata);
            let encodeData = this.base64URLEncode(timestamp +'/'+ data)
            return encodeData;
        },
        base64URLEncode(str) {
            return btoa(str)
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=/g, '');
        },
    },
}
</script>