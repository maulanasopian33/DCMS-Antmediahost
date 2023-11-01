<template>
    <div class="w-full h-full bg-gray-100  flex justify-center" >
        <div class="w-full min-h-screenn md:w-[210mm] md:h-[290mm] md:shadow-md bg-white p-10 md:p-[2cm]" >
            <div id="content">
                <h1 class="text-center font-bold text-2xl mb-10">REPORT VISIT DC REQUEST</h1>
                <table class="text-sm md:text-base break-all">
                    <tbody>
                    <tr>
                        <td class="px-2">Lead Name </td>
                        <td class="px-2">:</td>
                        <td class="px-2">{{ this.data.lead_name }}</td>
                    </tr>
                    <tr>
                        <td class="px-2">Email</td>
                        <td class="px-2">:</td>
                        <td class="px-2">{{ this.data.lead_email }}</td>
                    </tr>
                    <tr>
                        <td class="px-2">Phone Number</td>
                        <td class="px-2">:</td>
                        <td class="px-2">{{ this.data.lead_phone }}</td>
                    </tr>
                    <tr>
                        <td class="px-2">Reason</td>
                        <td class="px-2">:</td>
                        <td class="px-2">{{ this.data.reason }}</td>
                    </tr>
                    <tr>
                        <td class="px-2">Data Center</td>
                        <td class="px-2">:</td>
                        <td class="px-2">{{ this.data.data_center }}</td>
                    </tr>
                    <tr>
                        <td class="px-2">Company Name</td>
                        <td class="px-2">:</td>
                        <td class="px-2">{{ this.data.company_name }}</td>
                    </tr>
                    <tr>
                        <td class="px-2">Date</td>
                        <td class="px-2">:</td>
                        <td class="px-2">{{ this.data.Date }}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="w-full mt-10 overflow-x-auto">
                    <h3 class="">Teams</h3>
                    <table class="w-full border border-blue-800 rounded-md">
                    <thead>
                        <tr class="text-md font-semibold tracking-wide text-left text-white bg-blue-800 uppercase border-b border-gray-600">
                        <td class="text-sm p-2 md:p-4">Name</td>
                        <td class="text-sm p-2 md:p-4">NIK</td>
                        <td class="text-sm p-2 md:p-4">Email</td>
                        <td class="text-sm p-2 md:p-4">Phone Number</td>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in dataTeams" :key="index">
                        <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-blue-100 border-b border-blue-600">
                        <td class="text-sm p-2 md:p-4">{{ item.name }}</td>
                        <td class="text-sm p-2 md:p-4">{{ item.nik }}</td>
                        <td class="text-sm p-2 md:p-4">{{ item.email }}</td>
                        <td class="text-sm p-2 md:p-4">{{ item.phone }}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h3 class="pt-10">Attachment</h3>
                <div class="flex w-full flex-wrap items-end">
                    <div v-for="(item, index) in attTeam" :key="index">
                        <div class="p-1 text-center text-xs w-28">
                            <img :src="item.ktp" :alt="item.name" srcset="" class=" h-fit" @click="showimg(item.ktp)">
                            <span>{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <!-- <qrcode-vue :value="data.lead_signature" :size="size" level="H" /> -->
            </div>
            <vue-easy-lightbox
                :visible="imgvisible"
                :imgs="imgurl"
                @hide="function(){imgvisible = false}">
            </vue-easy-lightbox>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import VueEasyLightbox from 'vue-easy-lightbox'
import QrcodeVue from 'qrcode.vue'
import html2pdf from "html2pdf.js";
export default {
    name : "reportVisitDc",
    data() {
        return {
            url         : import.meta.env.VITE_APIBASE,
            userId      : this.$storage.getStorageSync("user_id"),
            data        : [],
            dataTeams   : [],
            imgvisible  : false,
            imgurl      : '',
            attTeam     : [],
            loader      : null,
        }
    },
    components : {VueEasyLightbox, QrcodeVue},
    mounted() {
        this.getdata(atob(this.$route.params.id))
        this.loader = this.$loading.show({
                    // Optional parameters
                    container: null,
                    canCancel: false,
                });
    },
    methods: {
        showimg(data){
            this.imgurl = data
            this.imgvisible = true
        },
        exportToPDF() {
            html2pdf(document.getElementById("content"), {
                        margin: 10,
                        filename: "i-was-html.pdf",
                    });
            },
         getdata(uid){
            axios.get(this.url + 'visitdc/report/'+uid).then(({data}) => {
                console.log(data.datas)
                this.data = data.datas[0]
                this.attTeam.push({ktp :this.data.lead_ktp , name :this.data.lead_name})
                // let dataTeams = JSON.parse(this.data.teams)
                axios.get(this.url +'teams/getbyname/'+this.userId+'/'+encodeURI(this.data.teams)).then(({data}) => {
                    this.dataTeams = data.datas
                    this.attTeam.push({ktp :this.dataTeams[0].ktp , name :this.dataTeams[0].name})
                    console.log(this.attTeam)
                    this.loader.hide()
                })
            })
        },
    },
}
</script>