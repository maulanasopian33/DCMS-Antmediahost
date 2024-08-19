<template>
    <div>
        <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
            <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Admin Panel
                </div>
                <!-- <button class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
            <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i class="fab fa-facebook-f"></i></span>
            <span>Login with Facebook</span>
            </button>
            <div class="relative mt-10 h-px bg-gray-300">
            <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With username</span>
            </div>
            </div> -->
                <div class="mt-10">
                    <div class="relative z-0 w-full mb-5">
                        <input type="text" name="username" placeholder=" " required  v-model="username"
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter
                            username</label>
                        <span class="text-sm text-red-600" id="error">{{ error.username
                            }}</span>
                    </div>
                    <div class="relative z-0 w-full mb-5">
                        <input type="password" @keyup.enter="login()" name="password" placeholder=" " required  v-model="password"
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter
                            password</label>
                        <span class="text-sm text-red-600" id="error">{{ error.password
                            }}</span>
                    </div>
                    <div class="flex items-center mb-6 -mt-4">
                        <div class="flex ml-auto">
                            <a href="#" class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot
                                Your Password?</a>
                        </div>
                    </div>

                    <div class="flex w-full">
                        <button @click="login()"
                            class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                            <span class="mr-2 uppercase">Login</span>
                            <span>
                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-6">
                    <a class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                        <span>
                            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </span>
                        <span class="ml-2">You don't have an account?</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not([value='']):valid ~ label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
  }

  input:focus ~ label,
  select:focus ~ label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
    left: 0px;
  }
</style>
<script>
import axios from 'axios'
export default {
    name: 'adminLogin',
    data() {
        return {
            username: '',
            password: '',
            url: import.meta.env.VITE_APIBASE,
            error: [],
            loader: null,


        }
    },
    mounted() {
        // getKey(this)
    },
    methods: {
        async login() {
            try {
                const token = await this.$recaptcha('verify');
                this.loader = this.$loading.show({ container: null, canCancel: false });
                axios.post(this.url + 'admin/login', {
                    username: this.username,
                    password: this.password,
                    token: token
                }).then((res) => {
                    this.requirefield(res.data)
                    if (res.data.status) {
                        this.$notify({
                            title: 'Berhasil login',
                            text: res.data.message,
                            type: 'success',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                        this.loader.hide()
                        this.$storage.setStorageSync("token", res.data.data.token, 86400000);
                        this.$storage.setStorageSync("userId", res.data.data.userId, 86400000);
                        this.$router.push('/admin')
                        return true
                    }
                    this.$notify({
                        title: 'Gagal login',
                        text: res.data.message,
                        type: 'error',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                    this.loader.hide()
                })
            } catch (error) {
                this.$notify({
                    title: 'Gagal login',
                    text: error,
                    type: 'error',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
            }
        },
        requirefield(data) {
            this.error.username = ''
            this.error.password = ''
            if (data.hasOwnProperty('err')) {
                if (data.err.hasOwnProperty('username')) {
                    this.error.username = data.err.username[0]
                }
                if (data.err.hasOwnProperty('password')) {

                    this.error.password = data.err.password[0]
                }
            }
        }
    },
}
</script>