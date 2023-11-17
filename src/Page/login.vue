<template>
    <div>
        <!-- <div class="flex">
            <div
                class="hidden h-screen w-0 flex-col justify-center bg-orange-600 p-40 text-right text-white md:flex md:w-2/3 md:p-10">
                <h2 class="text-4xl">DATA CENTER</h2>
                <h2 class="text-8xl font-extrabold">VISIT</h2>
                <h2 class="text-5xl">MANAGEMENT</h2>
                <h2 class="text-8xl font-medium">SYSTEM</h2>
            </div>
            <div
                class="z-10 flex h-screen w-full flex-col justify-center bg-white px-5 py-10 text-center shadow-2xl shadow-black md:w-1/3">
                <h1 class="text-3xl font-medium">LOGIN PAGE</h1>
                <p class="pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <a href="http://localhost:8000/0auth" class="rounded-md bg-orange-700 px-4 py-3 text-white"> Login Dengan My Ant</a>
            </div>
        </div> -->

        <div class="relative py-10 bg-gradient-to-br from-sky-50 to-gray-200 w-full h-screen">
            <div class="relative container m-auto px-6 text-gray-500 md:px-10 xl:px-40">
                <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div class="rounded-xl bg-white shadow-xl">
                        <div class="p-6 sm:p-16">
                            <div class="space-y-4 sm:text-center">
                                <img src="../assets/logo.svg"
                                    loading="lazy" class="w-1/2" alt="tailus logo">
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
                                <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
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
export default {
    name : 'loginPage',
    data() {
        return {
            url         : import.meta.env.VITE_APIBASE,
        }
    },
    created() {
        if(this.$storage.hasKey('user_id') && !this.$storage.isExpire('user_id')){
            this.$router.push('/')
        }
        else if(this.$storage.isExpire('user_id') || this.$route.params.code != null){
            this.getClientId();
        }else{
            return true;
        }
    },
    methods: {
        login(){
            window.location.assign('http://localhost:8000/0auth');
        },
        getClientId(){
            if(this.$route.params.code != null){
                let data = JSON.parse(atob(this.$route.params.code));
                axios.get(this.url + 'getUser/' + data.userId).then(({data}) => {
                    let mydata = data.data
                    this.$storage.setStorageSync("username",mydata.name,86400000);
                })
                this.$storage.setStorageSync("user_id",data.userId,86400000);
                this.$storage.setStorageSync("token",data.token,86400000);
                // console.log(this.$storage.isExpire('user_id'))
                this.$router.push('/')
            }else{

            }
        }
    },
}
</script>