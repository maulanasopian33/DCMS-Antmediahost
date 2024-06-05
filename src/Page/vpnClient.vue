<template>
    <div>
        <baseLy>
            <div class="md:w-[90%] m-10 md:h-fit grid gap-6 md:grid-cols-2">
                <div class="bg-white rounded-md shadow-md p-10 text-center">
                    <p class="">username</p>
                    <h2 class="text-4xl font-bold mb-5 uppercase">{{ vpnData.name }}</h2>
                    <div class="flex justify-center my-5">
                        <div class="w-48 h-48 relative">
                            <div :class="(vpnData.disabled === 'false') ? 'border-green-700 animate-ping' : 'border-blue-700'"
                                class="w-full h-full border-[5px] border-dotted  rounded-full flex justify-center items-center absolute ">
                            </div>
                            <div @click="setdisable()"
                                :class="(vpnData.disabled === 'false') ? 'bg-green-700 hover:bg-green-300' : 'bg-blue-700 hover:bg-blue-300'"
                                class="w-[90%] h-[90%] absolute left-[10px] top-[10px] rounded-full flex justify-center items-center text-white cursor-pointer ">
                                <svg width="50%" height="50%" viewBox="0 0 24 24" version="1.1" xml:space="preserve"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="currentColor" stroke="currentColor">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="grid_system"></g>
                                        <g id="_icons">
                                            <g>
                                                <path
                                                    d="M16.6,4.2c-0.5-0.3-1.1-0.1-1.4,0.4c-0.3,0.5-0.1,1.1,0.4,1.4c2.1,1.3,3.5,3.6,3.5,6c0,3.9-3.1,7-7,7s-7-3.1-7-7 c0-2.5,1.4-4.8,3.5-6.1C9,5.6,9.2,5,8.9,4.6C8.6,4.1,8,3.9,7.5,4.2C4.7,5.8,3,8.8,3,12c0,5,4,9,9,9s9-4,9-9 C21,8.8,19.3,5.9,16.6,4.2z">
                                                </path>
                                                <path
                                                    d="M12,13c0.6,0,1-0.4,1-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v9C11,12.6,11.4,13,12,13z">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p>Status <span :class="(vpnData.disabled === 'true') ? 'bg-red-500' : 'bg-green-500'"
                            class=" p-2 rounded-md text-white">{{ (vpnData.disabled === 'true') ? 'Disable' :
                        'Enable' }}</span></p>


                </div>
                <div class="bg-white p-10 rounded-md shadow-md">
                    <h3 class="text-xl font-bold py-5">Detail VPN</h3>
                    <div class="border p-5 border-dashed border-blue-700 text-lg">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Host</td>
                                    <td>:</td>
                                    <td>{{ vpnData.host }}</td>
                                </tr>
                                <tr>
                                    <td>Protocol</td>
                                    <td>:</td>
                                    <td>{{ vpnData.protocol }}</td>
                                </tr>
                                <tr>
                                    <td>Username</td>
                                    <td>:</td>
                                    <td>{{ vpnData.name }}</td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>:</td>
                                    <td>{{ vpnData.password }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </baseLy>
    </div>
</template>

<script>
import baseLy from './baseLayout.vue';
import { decrypt } from '../utils/RSAClass.js'
import axios from 'axios'
export default {
    name: 'vpnClient',
    components: { baseLy },
    data() {
        return {
            url: import.meta.env.VITE_APIBASE,
            userId: this.$storage.getStorageSync("user_id"),
            loader: '',
            vpnData: []
        }
    },
    mounted() {
        this.getdata()
    },
    methods: {
        getdata() {
            this.loader = this.$loading.show({ container: null, canCancel: false, });
            axios.get(this.url + 'getUser/' + this.userId).then(({ data }) => {
                axios.get(this.url + 'get/vpn/' + data.data.vpn).then(({ data }) => {
                    let datadecrypt = JSON.parse(decrypt(data.data))
                    this.vpnData = datadecrypt[0]
                    console.log(this.vpnData)
                    this.loader.hide()
                })
            })
        },
        setdisable() {
            this.loader = this.$loading.show({ container: null, canCancel: false, });
            let status = ''
            if (this.vpnData.disabled === 'true') {
                status = 'enable'
            } else {
                status = 'disable'
            }

            let datas = {
                'status': status,
                'username': this.vpnData['vpnId'],
                'name': this.vpnData['name']
            }
            axios.post(this.url + 'vpn/disable', datas).then(({ data }) => {
                if (data.status) {
                    this.$notify({
                        title: 'Berhasil',
                        text: data.message,
                        type: 'success',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                } else {
                    this.$notify({
                        title: 'Gagal',
                        text: data.message,
                        type: 'error',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                }
                this.loader.hide()
                location.reload()
            })
        },
    },
}
</script>