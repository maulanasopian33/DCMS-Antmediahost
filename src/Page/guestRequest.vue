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
                        <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Permintaan Visit DC Terkirim</h3>
                        <p class="text-gray-600 my-2">Silahkan menunggu tim menginformasikan untuk proses selanjutnya</p>
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
        <div class="relative py-10 bg-gradient-to-br from-sky-50 to-gray-200 w-full h-full">
            <div class="relative container m-auto px-6 text-gray-500 md:px-10 xl:px-40">
                <div class="m-auto w-[90%]">
                    <div class="rounded-xl bg-white shadow-xl">
                        <h3 class="text-xl font-bold text-gray-900 p-10">Request Visit DC</h3>
                        <div class="flex flex-col p-10 pt-0">
                            <div class="overflow-x-auto rounded-lg">
                                <div class="align-middle inline-block w-full">
                                    <div class="shadow overflow-hidden sm:rounded-lg">
                                        <div class="grid gap-6 mb-6 lg:grid-cols-2">
                                            <div>
                                                <label for="full_name"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full
                                                    Name</label>
                                                <input disabled type="text" v-model="mydata.name"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                    placeholder="Name" required>
                                            </div>
                                            <div>
                                                <label for="email"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                                <input disabled type="email" v-model="mydata.email" id="email"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                    placeholder="Email" required>
                                            </div>
                                            <div>
                                                <label for="phone"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                                                    Number</label>
                                                <input type="tel" v-model="mydata.phone" id="phone"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                    placeholder="(62) 123-456-789"
                                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                                            </div>
                                            <div>
                                                <label for="nik"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NIK</label>
                                                <input type="text" v-model="mydata.nik" id="nik"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                    placeholder="NIK" required>
                                            </div>
                                            
                                            <div>
                                                <label for="data center"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Data Center</label>
                                                    <select
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Data center" required @change="optionData($event,'data_center')">
                                                        <option value="#" selected>Data Center</option>
                                                        <option value="Area 31">Area 31</option>
                                                        <option value="Technovillage">Technovillage</option>
                                                        <option value="Gedung Cyber">Gedung Cyber</option>
                                                    </select>
                                            </div>
                                            <div>
                                                <label for="company"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company
                                                    Name</label>
                                                <input name="company" type="text" v-model="mydata.company"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                    placeholder="Company Name" required>
                                            </div>
                                            <div>
                                                <label for="date"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                                                <input type="date" v-model="mydata.date" id="date"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                    required>
                                            </div>
                                        </div>
                                        <div class="sm:overflow-y-auto max-w-full">
                                            <table class="min-w-full divide-y divide-gray-200 mb-8">
                                                <thead class="bg-orange-600">
                                                    <tr>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Name
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            NIK
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Email
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white">
                                                    <tr v-for="(item, index) in teams" :key="index">
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.name }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            {{ item.nik }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            {{ item.email }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            <button @click="teams.splice(index,1)"
                                                                class=" ml-auto focus:outline-none hover:bg-gray-300 p-3 rounded-md">
                                                                <svg class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24">
                                                                    <path class="pointer-events-none"
                                                                        d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <input type="text" v-model="tempteam.name" id="name"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                            placeholder="name" required>
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            <input type="text" v-model="tempteam.nik" id="nik"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                            placeholder="NIK" required>
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            <input type="email" v-model="tempteam.email" id="email"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                            placeholder="email" required>
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            <button @click="addteam()"
                                                                class=" ml-auto focus:outline-none hover:bg-gray-300 p-3 rounded-md">
                                                                <svg width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>save-floppy</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-154.000000, -517.000000)" fill="#000000"> <path d="M172,522 C172,521.447 172.448,521 173,521 C173.552,521 174,521.447 174,522 L174,526 C174,526.553 173.552,527 173,527 C172.448,527 172,526.553 172,526 L172,522 L172,522 Z M163,529 L177,529 C177.552,529 178,528.553 178,528 L178,517 L162,517 L162,528 C162,528.553 162.448,529 163,529 L163,529 Z M182,517 L180,517 L180,529 C180,530.104 179.104,531 178,531 L162,531 C160.896,531 160,530.104 160,529 L160,517 L158,517 C155.791,517 154,518.791 154,521 L154,545 C154,547.209 155.791,549 158,549 L182,549 C184.209,549 186,547.209 186,545 L186,521 C186,518.791 184.209,517 182,517 L182,517 Z" id="save-floppy" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">File KTP</label>
                                        <div class="flex">
                                            <div class="bg-grey-lighter mb-5 mr-5">
                                                    <label
                                                        class="w-full md:w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg uppercase border-2 border-dashed border-gray-500 cursor-pointer hover:bg-blue-500 hover:text-white">
                                                        <svg class="w-8 h-8" fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path
                                                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                                        </svg>
                                                        <span class="mt-2 text-sm md:text-base leading-normal">Select a file</span>
                                                        <input @change="onFilePicked()" ref="file" type='file' class="hidden" />
                                                    </label>
                                                </div>
                                                <div class="flex flex-wrap gap-2 bg-grey-lighter mb-5 relative">
                                                    <article v-for="(item, index) in file" :key="index" tabindex="0"
                                                        class="group w-20 h-20 md:w-[120px] md:h-[120px] rounded-md focus:outline-none focus:shadow-outline bg-gray-300 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                                        <img :src="item.data"
                                                            alt="upload preview"
                                                            class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                                                        <section
                                                            class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                                            <h1 class="flex-1">{{ item.name }}</h1>
                                                            <div class="flex">
                                                                <span class="p-1" >
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
                                                                <button @click="file.splice(index,1)"
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
                                        
                                        <button @click="savedata()"
                                            class=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                            Send Request
                                        </button>
                                    </div>
                                </div>
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
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
export default {
    name : 'guestRequest',
    components: {
                VueFinalModal
            },
    data() {
        return {
            url         : import.meta.env.VITE_APIBASE,
            mydata    : [],
            file      : [],
            teams     : [],
            tempteam    : [],
            loader      : null,
            showModal   : false,
        }
    },
    created() {
        this.getdataurl()
    },
    methods: {
        onFilePicked(){
            this.loader = this.$loading.show({container: null,canCancel: false,});
            this.upload = this.$refs.file.files[0]
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.filektp = fileReader.result;
                this.file.push({ data: fileReader.result, name: this.upload.name })
                this.loader.hide()
            })
            fileReader.readAsDataURL(this.upload)
        },
        optionData(event,key){
            this.mydata[key] = event.target.value;
        },
        addteam(){
            this.teams.push(this.tempteam)
            this.tempteam = []
        },
        getdataurl(){
            let paramUrl = this.$route.params.id
            try {
                let decodedata = this.base64URLDecode(paramUrl)
                let expireDate = decodedata.split('/')[0]
                this.checkexpireDate(expireDate)
                
                let data = JSON.parse(decodedata.split('/')[1])
                this.mydata.name = data.name
                this.mydata.email = data.email
            } catch (error) {
                this.$notify({
                    title: 'Gagal',
                    text: "link tidak valid",
                    type: 'error',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
                this.$router.push('/');
            }
        },
        async savedata(){
            this.loader = this.$loading.show({container: null,canCancel: false,});
            try {
                const response = await axios.post(this.url + 'request/guest/visitdc', this.prepareData()).then((data)=>{
                    if (data.status) {
                        this.$notify({
                            title: 'Berhasil',
                            text: data.message,
                            type: 'success',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                        this.showModal = true
                        // this.$router.push('/');
                    }else{
                        this.$notify({
                            title: 'Gagal',
                            text: data.message,
                            type: 'error',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                    }
                });
                this.loader.hide();
            } catch (error) {
                this.loader.hide();
                this.$notify({
                            title: 'Gagal',
                            text: "Silahkan coba lagi",
                            type: 'error',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
            }
        },
    prepareData(){
        let team = []
        this.teams.forEach(element => {
            team.push({name : element.name, nik : element.nik, email : element.email})
        });
        let datas = {
            UID                : uuidv4(),
            name               : this.mydata.name,
            email              : this.mydata.email,
            phone              : this.mydata.phone,
            nik                : this.mydata.nik,
            ktp                : JSON.stringify(this.file),
            company_name       : this.mydata.company,
            Date               : this.mydata.date,
            data_center        : this.mydata.data_center,
            reason             : "Visit DC",
            dataserver         : "",
            serverId           : "",
            server_maintenance : "",
            teams              : JSON.stringify(team),
            file_surat         : ''

        }
        return datas;
    },
        checkexpireDate(timestamp){
            if (timestamp) {
                const currentTimestamp = Math.floor(Date.now() / 1000); // Timestamp saat ini
                const expirationTime = 24 * 60 * 60; // Satu hari dalam detik
                console.log(currentTimestamp - timestamp)
                console.log(expirationTime)
                if (currentTimestamp - timestamp < expirationTime) {
                    return true;
                } else {
                    this.$notify({
                        title: 'Gagal',
                        text: "Tautan sudah kedaluwarsa",
                        type: 'error',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                    this.$router.push('/');
                }
            } else {
                this.$notify({
                    title: 'Gagal',
                    text: "link tidak valid",
                    type: 'error',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
                this.$router.push('/');
            }
        },
        base64URLDecode(str) {
            return atob(str.replace(/-/g, '+').replace(/_/g, '/'));
        }
    },
}
</script>