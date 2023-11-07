<template>
    <div>
        <baseLy>
            <main>

    <vue-final-modal v-model="showModal" >
        <div class="flex justify-center items-center h-screen">
            <div class="bg-white w-fit md:w-[80%] m-5 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                <h3 class="text-2xl mb-4">Add Teams</h3>
                <div class="mb-6">
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search</label>
                    <input @input="onfilter($event)" type="text" id="company"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder="Team Name" required>
                </div>
                <table class="w-full divide-y divide-gray-200">
                    <thead class="bg-orange-600">
                        <tr>
                            <th scope="col"
                                class="p-4 text-left text-xs font-medium text-white uppercase">
                                Name
                            </th>
                            <th scope="col"
                                class="p-4 text-left text-xs font-medium text-white uppercase">
                                NIK
                            </th>
                            <th scope="col"
                                class="p-4 text-left text-xs font-medium text-white uppercase">
                                Email
                            </th>
                            <th scope="col"
                                class="p-4 text-left text-xs font-medium text-white uppercase">

                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white" v-for="(item, index) in filterTeams" :key="index">
                        <tr>
                            <td class="p-4 text-sm font-normal text-gray-900">
                                {{ item.name }}
                            </td>
                            <td class="p-4 text-sm font-normal text-gray-500">
                                {{ item.phone }}
                            </td>
                            <td class="p-4 text-sm font-semibold text-gray-900">
                                {{ item.email }}
                            </td>
                            <td class="p-4 text-sm font-semibold">
                                <span class="bg-orange-600 text-white p-2" @click="addtteams(item)">Add</span>
                            </td>
                        </tr>
                    </tbody>
                    <span v-if="filterTeams.length <= 0" class="text-sm">Data tidak ditemukan, silahkan tambahkan di menu Teams atau klik di <router-link to="/teams">Sini</router-link></span>
                </table>
                <div class="mt-5">
                  <button @click="showModal = false">Close</button>
                </div>
            </div>
        </div>
        
    </vue-final-modal>
                <div class="pt-6 px-4">
                    <div class="w-full gap-4">
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Add Visit DC</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of history visit
                                        dc</span>
                                </div>
                                <div class="flex-shrink-0">
                                    <button class="hidden md:block bg-orange-600 p-2 text-white rounded-md shadow-md hover:bg-orange-400" ref="show" @click="pip">View Camera</button>
                                </div>
                            </div>
                            <div class="flex flex-col mt-8">
                                <div class="overflow-x-auto rounded-lg">
                                    <div class="align-middle inline-block w-full">
                                        <div class="shadow overflow-hidden sm:rounded-lg">
                                            <!-- webcam -->
                                                <div class="mb-6">
                                                    <video class="md:hidden rounded-md" ref="camera" :width="450" :height="337.5" autoplay poster="/placeholder.jpg"></video>
                                                    <canvas class="hidden" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
                                                </div>
                                            <!-- webcam end -->
                                            <div class="grid gap-6 mb-6 lg:grid-cols-2">
                                                <div>
                                                    <label for="full_name"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full
                                                        Name</label>
                                                    <input type="text" v-model="mydata.name"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Name" required>
                                                </div>
                                                <div>
                                                    <label for="email"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                                    <input type="email" v-model="mydata.email" id="email"
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
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reason</label>
                                                        <select 
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                            placeholder="Data center" required @change="optionData($event,'reason')">
                                                            <option value="#" selected>Reason</option>
                                                            <option value="Maintenance">Maintenance</option>
                                                            <option value="Troubleshoot">Troubleshoot</option>
                                                            <option value="Visit">Visit</option>
                                                            <option value="Replacement">Replacement</option>
                                                            <option value="Installation">Installation</option>
                                                            
                                                        </select>
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
                                            <div class="flex content-center justify-between">
                                                <label for="data center"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teams</label>
                                                <button @click="showmodalA()" class="bg-orange-600 text-sm text-white py-1 px-2 m-2 rounded-sm">Add</button>
                                            </div>
                                            <div class="sm:overflow-y-auto max-w-full">
                                                <table class="min-w-full divide-y divide-gray-200">
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
                                                <tbody class="bg-white" v-for="(item, index) in selectedteams" :key="index">
                                                    <tr>
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
                                                            <button @click="selectedteams.splice(index,1)"
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
                                                </tbody>
                                            </table>
                                            </div>
                                            <div class="mb-6">
                                                <label for="company"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company
                                                    Name</label>
                                                <input type="text" v-model="mydata.company"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                    placeholder="Company Name" required>
                                            </div>
                                            <div class="mb-6">
                                                <label for="date"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                                                <input type="date" v-model="mydata.date" id="date"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                     required>
                                            </div>
                                            <div class="mb-6">
                                                <label for="confirm_password"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">signature</label>
                                                    <div class="shadow-md md:m-4 border-2 relative md:w-[500px] w-full h-[500px] p-3">
                                                        <button @click="undo"
                                                            class=" ml-auto focus:outline-none hover:bg-gray-300 p-3 rounded-md">
                                                            <svg class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24">
                                                                <path class="pointer-events-none"
                                                                    d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                            </svg>
                                                        </button>
                                                        <div class="absolute">
                                                            <VueSignaturePad width="400px" height="400px" ref="signaturePad" />
                                                        </div>
                                                    </div>
                                            </div>
                                            
                                            <button @click="savedata()" :disabled="issave" :class="issave ? 'hover:cursor-not-allowed' : ''" type="submit"
                                                class=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                                <div class="flex items-center justify-center">
                                                    <div v-show="issave" class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                                                    <div class="ml-2"> {{ txtsave }} <div>
                                                </div></div></div>
                                            </button>
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
    import baseLy from './baseLayout.vue';
    import { v4 as uuidv4 } from 'uuid';
    import { VueFinalModal } from 'vue-final-modal';
export default {
    name : 'add_visitDc',
    components: { baseLy ,VueFinalModal },
    data() {
    return {
      showModal     : false,
      videoElement  : null,
      stream        : null,
      upload        : null,
      filektp       : '',
      url           : import.meta.env.VITE_APIBASE,
      userId        : this.$storage.getStorageSync("user_id"),
      file          : [],
      teams         : [],
      filterTeams   : [],
      selectedteams : [],
      mydata        : {},
      txtsave       : 'Save Data',
      issave        : false,
    };
  },
  mounted() {
    this.videoElement = this.$refs.camera;
    this.createCameraElement();
    axios.get(this.url + 'getUser/' + this.userId).then(({data}) => {
        this.mydata = data.data
        this.file[0] = { data: this.mydata.ktp, name: this.mydata.name }
        this.filektp =this.mydata.ktp
    })
  },
  unmounted() {
    this.stream.getVideoTracks()[0].stop();
  },
  methods: {
    async savedata(){
        this.issave = true;
        this.txtsave = "Processing..";
        try {
            const response = await axios.post(this.url + 'visitdc', this.prepareData()).then(({data})=>{
                if (data.status) {
                    this.$notify({
                        title: 'Berhasil',
                        text: data.message,
                        type: 'success',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                    this.$router.push('/visitdc');
                }else{
                    this.$notify({
                        title: 'Gagal',
                        text: data.message,
                        type: 'error',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                }
            });
            this.success();
        } catch (error) {
        }
    },
    success(){
        this.issave = false;
        this.txtsave = "Success Save";
    },
    prepareData(){
        // init signature result
        const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
        // convert teams selected to array
        let teams = [];
        this.selectedteams.forEach(element => {
            teams.push(element.name)
        });
        // get webcam image
        const context = this.$refs.canvas.getContext('2d');
        context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);

        let datas = {
            UID             : uuidv4(),
            id_user         : this.userId,
            lead_name       : this.mydata.name,
            lead_email      : this.mydata.email,
            lead_phone      : this.mydata.phone,
            lead_nik        : this.mydata.nik,
            lead_ktp        : this.filektp,
            lead_signature  : data,
            company_name    : this.mydata.company,
            Date            : this.mydata.date,
            data_center     : this.mydata.data_center,
            reason          : this.mydata.reason,
            teams           : JSON.stringify(teams),
            webcam          : this.$refs.canvas.toDataURL('image/png')

        }
        return datas;
    },
    optionData(event,key){
        this.mydata[key] = event.target.value;
    },
    addtteams(item){
        this.selectedteams.push(item)
        this.showModal = false;
    },
    showmodalA(){
        this.showModal = true;
        this.getteams();
    },
    onfilter(event){
        let data = this.teams.filter(function(val){
            let result = val.name.toLowerCase();
            return result.includes(event.target.value)
        })
        this.filterTeams = data
    },
    getteams(){
        axios.get(this.url + 'teams/'+this.userId).then(({data}) => {
            this.teams = data.datas;
        })
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
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    pip(){
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture()
              .catch(error => {
                console.error('Failed to exit PiP mode:', error);
              });
          } else {
            this.videoElement.requestPictureInPicture()
              .catch(error => {
                console.error('Failed to enter PiP mode:', error);
              });
          }
    },
    createCameraElement() {
        const constraints = (window.constraints = {
            audio: false,
            video: true
        });


        navigator.mediaDevices
                .getUserMedia(constraints)
                .then(stream => {
                    this.stream = stream;
                    this.$refs.camera.srcObject = stream;
                })
                .catch(error => {
                    alert("May the browser didn't support or there is some errors.");
                });
    },
    
  },
}
</script>