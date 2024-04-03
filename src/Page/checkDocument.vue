<template>
    <div class="bg-slate-200 h-screen w-full flex justify-center">
        <div class="max-w-screen-2xl flex flex-col items-center p-10">
            <div>
                <img v-show="!status" src="../assets/error.svg" alt="error" srcset="">
                <img v-show="status" src="../assets/success.svg" alt="done" srcset="">
            </div>
            <div class="text-center">
                <h1 class="text-4xl p-2 font-bold text-green-700">Verification Document</h1>
                <p>{{ (status) ? 'This document is a valid document issued by Antmediahost with the following details' :
                    'Document data not found please try again' }}</p>
            </div>
            <div class="w-full grid md:grid-cols-2 gap-6 mt-10">
                <div class="bg-white w-full shadow-md rounded-md p-5">
                    <h2 class="text-md font-semibold">Details Document</h2>
                    <div class="mt-2 w-full hover:bg-slate-100/70 cursor-pointer p-2 rounded-md">
                        <h3 class="text-base font-semibold px-2">Nomor Surat</h3>
                        <h4 class="text-xs px-2">{{ data.no_surat }}</h4>
                    </div>
                    <div class="mt-2 w-full hover:bg-slate-100/70 cursor-pointer p-2 rounded-md">
                        <h3 class="text-base font-semibold px-2">Tanggal Surat</h3>
                        <h4 class="text-xs px-2">{{ data.updated_at }}</h4>
                    </div>
                    <div class="mt-2 w-full hover:bg-slate-100/70 cursor-pointer p-2 rounded-md">
                        <h3 class="text-base font-semibold px-2">Perihal</h3>
                        <h4 class="text-xs px-2">
                            {{ data.prihal }}
                        </h4>
                    </div>
                </div>
                <div class="bg-white w-full shadow-md rounded-md p-5 flex flex-col items-center">
                    <div class="w-full">
                        <h2 class="text-md font-semibold">File Document</h2>
                    </div>
                    <img src="../assets/pdf.svg" alt="" srcset="">
                    <a :href="data.url" target="_blank"
                        :class="(status) ? 'bg-blue-500 cursor-pointer' : 'bg-blue-300 cursor-not-allowed'"
                        class=" py-2 px-4 text-white rounded-md shadow-md hover:bg-blue-200 mt-2">View
                        Document</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'checkDocument',
    data() {
        return {
            url: import.meta.env.VITE_APIBASE,
            loader: '',
            data: [],
            status: false
        }
    },
    mounted() {
        this.getdata()
    },
    methods: {
        getdata() {
            this.loader = this.$loading.show({ container: null, canCancel: false, });
            axios.get(this.url + 'surat/getbyNomor/' + this.$route.params.id).then(({ data }) => {
                this.status = data.status
                if (data.status) {
                    this.data = data.data[0]
                    this.loader.hide()
                    return true;
                }
                this.$notify({
                    title: 'Gagal',
                    text: data.message,
                    type: 'error',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
                this.loader.hide()
            }).catch((error) => {
                this.$notify({
                    title: 'Gagal',
                    text: error.message,
                    type: 'error',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
            })
        }
    },
}
</script>