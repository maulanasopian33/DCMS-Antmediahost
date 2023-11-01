<template>
    <div>
        <div class="flex">
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
                <a href="http://localhost:8000/ssologin.php?option=oauthredirect&app_name=dcvms&login=true" class="rounded-md bg-orange-700 px-4 py-3 text-white"> Login Dengan My Ant</a>
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
        getClientId(){
            console.log(this.$route.params.code)
            if(this.$route.params.code != null){
                let data = JSON.parse(atob(this.$route.params.code));
                axios.get(this.url + 'getUser/' + data.userId).then(({data}) => {
                    let mydata = data.data
                    this.$storage.setStorageSync("username",mydata.name,86400000);
                })
                axios.get(this.url + 'sync/' + data.userId)
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