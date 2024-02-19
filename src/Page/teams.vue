<template>
    <div>
        <baseLy class="cursor-default">
            <vue-final-modal v-model="showModal">
                <div class="flex justify-center items-center h-screen">
                    <div class="bg-white w-fit m-5 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                        <h3 class="text-2xl mb-4">{{ this.titlemodal }}</h3>
                        <div class="grid gap-6 mb-6 lg:grid-cols-2">
                            <div>
                                <label for="full_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full
                                    Name</label>
                                <input v-model="fullname" type="text" id="full_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="Name" required>
                            </div>
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                <input v-model="email" type="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="Email" required>
                            </div>
                            <div>
                                <label for="phone"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                                    Number</label>
                                <input v-model="phone" type="tel" id="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="(62) 123-456-789" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                            </div>
                            <div>
                                <label for="nik"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NIK</label>
                                <input v-model="nik" type="text" id="nik"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="NIK" required>
                            </div>
                        </div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">File KTP</label>
                        <div class="flex">
                            <div class=" bg-grey-lighter mb-5">
                                <label
                                    class="w-32 md:w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
                                    <svg class="w-8 h-8" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span class="mt-2 text-sm md:text-base leading-normal">Select a file</span>
                                    <input @change="onFilePicked()" ref="file" type='file' class="hidden" />
                                </label>
                            </div>
                            <div class=" bg-grey-lighter mb-5 ml-3 relative">
                                <article tabindex="0"
                                    class="group w-full h-28 rounded-md focus:outline-none focus:shadow-outline bg-gray-300 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                    <img :src="this.file.length == 0 ? '/placeholder.jpg' : this.file[0].data"
                                        alt="upload preview"
                                        class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                                    <section
                                        class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                        <h1 class="flex-1">{{ this.file.name }}</h1>
                                        <div class="flex">
                                            <span class="p-1">
                                                <i>
                                                    <svg class="fill-current w-4 h-4 ml-auto pt-"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24">
                                                        <path
                                                            d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                                                    </svg>
                                                </i>
                                            </span>

                                            <p class="p-1 size text-xs"></p>
                                            <button @click="this.file = []"
                                                class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                                <svg class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24">
                                                    <path class="pointer-events-none"
                                                        d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </div>
                        <div class="inline">
                            <button v-show="addnew" @click="savedata()" class="bg-orange-600 text-white py-3 px-10 rounded-md">Save</button>
                            <button v-show="!addnew" @click="updatedata()" class="bg-orange-600 text-white py-3 px-10 rounded-md">Update</button>
                            <button @click="showModal = false" class="bg-blue-600 text-white py-3 px-10 rounded-md ml-2">Cancel</button>
                        </div>
                        <p class="pt-2 text-xs text-gray-400" v-show="!addnew">{{ uuidteams }}</p>
                    </div>
                </div>

            </vue-final-modal>
            <main>
                <div class="pt-6 px-4">
                    <div class="w-full gap-4">
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">List Teams</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of Teams</span>
                                </div>
                                <div class="flex-shrink-0">
                                    <a @click="showaddmodal()"
                                        class="text-sm font-medium bg-orange-600 text-white hover:bg-orange-300 rounded-lg p-2 cursor-pointer">Add Teams</a>
                                </div>
                            </div>
                            <div class="flex flex-col mt-8">
                                <div class="overflow-x-auto rounded-lg">
                                    <div class="align-middle inline-block min-w-full">
                                        <div class="shadow overflow-hidden sm:rounded-lg">
                                            <table class="min-w-full divide-y divide-gray-200">
                                                <thead class="bg-orange-600">
                                                    <tr>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Name
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Email
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Phone
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            NIK
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white" v-for="(item, index) in teams" :key="index">
                                                    <tr class="hover:bg-gray-200">
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.name }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.email }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.phone }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.nik }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span @click="showupdatemodal(item.name)" class="bg-green-500 p-2 text-white rounded-tl-md rounded-bl-md cursor-pointer"><i class="fa fa-pencil"></i></span>
                                                            <span @click="deletedata(item.UID)" class="bg-red-500 p-2 text-white rounded-tr-md rounded-br-md cursor-pointer"><i class="fa fa-trash"></i></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </baseLy>
    </div>
</template>

<script>
    import axios from 'axios';
    import { v4 as uuidv4 } from 'uuid';
    import baseLy from './baseLayout.vue';
    // import JwPagination from 'jw-vue-pagination';
    import { notify } from "@kyvg/vue3-notification";
    import { VueFinalModal } from 'vue-final-modal';
    export default {
        name: "Teams",
        components: {
            baseLy,
            // JwPagination,
            VueFinalModal
        },
        data() {
            return {
                showModal   : false,
                titlemodal  : 'Add Teams',
                addnew      : true,
                fullname    : '',
                nik         : '',
                phone       : '',
                email       : '',
                url         : import.meta.env.VITE_APIBASE,
                userId      : this.$storage.getStorageSync("user_id"),
                teams       : '',
                filektp     : '',
                file        : [],
                uuidteams   : '',
                loader      : null,
            }
        },
        created() {
            this.getdata();
        },
        methods: {
            showaddmodal(){
                this.showModal  = true;
                this.uuidteams  = ''
                this.fullname   = ''
                this.nik        = ''
                this.phone      = ''
                this.email      = ''
                this.file       = []
                this.filektp    = ''
            },
            showupdatemodal(name){
                this.loader = this.$loading.show({container: null,canCancel: false,});
                this.addnew = false
                this.titlemodal = "Update Teams"
                let teams = [name];
                axios.get(this.url + 'teams/getbyname/'+this.userId+'/'+encodeURI(JSON.stringify(teams))).then(({data}) => {
                    this.loader.hide();
                    let dataTeams   = data.datas[0]
                    this.uuidteams  = dataTeams.UID
                    this.fullname   = dataTeams.name
                    this.nik        = dataTeams.nik
                    this.phone      = dataTeams.phone
                    this.email      = dataTeams.email
                    this.file[0]    = {data : dataTeams.ktp, name : this.fullname}
                    this.filektp    = dataTeams.ktp
                    this.showModal  = true;
                })
            },
            hidemodalA(){
                this.showModal = false;
            },
            onFilePicked(){
                this.upload = this.$refs.file.files[0]
                this.file = [];
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.filektp = fileReader.result;
                    this.file.push({ data: fileReader.result, name: this.upload.name })
                })
                fileReader.readAsDataURL(this.upload)
            },
            async updatedata() {
                this.loader = this.$loading.show({container: null,canCancel: false,});
                try {
                    await axios.put(this.url + 'teams', {
                            UID     : this.uuidteams,
                            lead_id : this.userId,
                            name    : this.fullname,
                            nik     : this.nik,
                            email   : this.email,
                            phone   : this.phone,
                            ktp     : this.filektp
                        })
                        .then((response) => {
                            this.loader.hide();
                            if (response.data.status) {
                                this.$notify({
                                    title: 'Berhasil',
                                    text: response.data.message,
                                    type: 'success',
                                    duration: 5000, // Durasi notifikasi dalam milidetik
                                });
                            }else{
                                this.$notify({
                                    title: 'Gagal',
                                    text: response.data.message,
                                    type: 'error',
                                    duration: 5000, // Durasi notifikasi dalam milidetik
                                });
                            }
                            this.showModal = false;
                            this.getdata();
                        })
                } catch (error) {
                    console.log(error);
                }
            },
            deletedata(id){
                this.loader = this.$loading.show({container: null,canCancel: false,});
                axios.post(this.url + 'teams/delete/'+id).then(({data}) => {
                    this.loader.hide();
                    if(data.status){
                        this.$notify({
                            title: 'Berhasil',
                            text: data.message,
                            type: 'success',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                        this.getdata()
                    }else{
                        this.$notify({
                            title: 'Gagal',
                            text: response.data.message,
                            type: 'error',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                    }
                })
            },
            savedata() {
                this.loader = this.$loading.show({container: null,canCancel: false,});
                try {
                    axios.post(this.url + 'teams', {
                            UID     : uuidv4(),
                            lead_id : this.userId,
                            name    : this.fullname,
                            nik     : this.nik,
                            email   : this.email,
                            phone   : this.phone,
                            ktp     : this.filektp
                        })
                        .then((response) => {
                            this.loader.hide();
                            if (response.data.status) {
                                this.$notify({
                                    title: 'Berhasil',
                                    text: response.data.message,
                                    type: 'success',
                                    duration: 5000, // Durasi notifikasi dalam milidetik
                                });
                            }else{
                                this.$notify({
                                    title: 'Gagal',
                                    text: response.data.message,
                                    type: 'error',
                                    duration: 5000, // Durasi notifikasi dalam milidetik
                                });
                            }
                            this.hidemodalA();
                            this.getdata();
                        })
                } catch (error) {
                    console.log(error);
                }
            },
            getdata(){
                axios.get(this.url + 'teams/'+this.userId).then(({data}) => {
                    this.teams = data.datas;
                })
            }
        },
    }
</script>