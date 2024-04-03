<template>
    <div>
        <div class="relative py-10 bg-gradient-to-br from-sky-50 to-gray-200 w-full h-screen">
            <div class="relative container m-auto px-6 text-gray-500 md:px-10 xl:px-40">
                <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div class="rounded-xl bg-white shadow-xl">
                        <div class="p-6 sm:p-16">
                            <div class="space-y-4 sm:text-center">
                                <img src="../assets/logo.svg" loading="lazy" class="w-1/2" alt="tailus logo">
                                <h2 class="mb-8 text-3xl text-cyan-900 font-bold">Sign in to DCMS <br> <span
                                        class="text-[18px] font-light">Data Center Management System</span></h2>
                            </div>
                            <div class="mt-16 grid space-y-4">
                                <button @click="login()" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-orange-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div class="relative flex items-center space-x-4 justify-center">
                                        <!-- <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                                            class="absolute left-0 w-5" alt="google logo"> -->
                                        <span
                                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-orange-600 sm:text-base">Continue
                                            with my.antmedia.id</span>
                                    </div>
                                </button>
                                <button @click="guestlogin()" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div class="relative flex items-center space-x-4 justify-center">

                                        <span
                                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                            as Guest</span>
                                    </div>
                                </button>
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
import axios from 'axios'
import { getKeyClient } from '../utils/RSAClass'
export default {
    name: 'loginPage',
    data() {
        return {
            url: import.meta.env.VITE_APIBASE,
        }
    },
    created() {
        getKeyClient()
    },
    mounted() {
        if (this.$storage.hasKey('user_id') && !this.$storage.isExpire('user_id')) {
            this.$router.push('/')
        }
        else if (this.$storage.isExpire('user_id') || this.$route.params.code != null) {
            this.getClientId();
        } else {

        }
    },
    methods: {
        login() {
            window.location.assign(import.meta.env.VITE_API + '0auth');
        },
        guestlogin() {
            this.$router.push({ name: "request Visit" })
        },
        getClientId() {
            if (this.$route.params.code != null) {
                let data = JSON.parse(atob(this.$route.params.code));
                axios.get(this.url + 'getUser/' + data.userId).then(({ data }) => {
                    let mydata = data.data
                    this.$storage.setStorageSync("username", mydata.name, 86400000);
                })
                this.$storage.setStorageSync("user_id", data.userId, 86400000);
                this.$storage.setStorageSync("token", data.token, 86400000);
                // console.log(this.$storage.isExpire('user_id'))
                this.$router.push('/')
            } else {

            }
        }
    },
}
</script>