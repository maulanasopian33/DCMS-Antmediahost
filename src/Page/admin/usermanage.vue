<template>
    <div>
        <baseLy>
            
            <main>
                <vue-final-modal v-model="showModal">
                <div class="flex justify-center items-center h-screen">
                    <div
                        class="bg-white w-fit md:w-[50%] m-5 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                        <h3 class="text-2xl mb-4">Add Users</h3>
                        <div class="mb-3 w-full">
                            <label for="username"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">username</label>
                            <input type="text" id="username" v-model="users.username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="type username" required>
                            <span v-show="error.hasOwnProperty('username')" class="bg-red-400/30 text-[10px] w-full text-red-900 border-red-600 rounded-md px-2 py-1 border-l-2 mt-2">{{ error.username }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="fullname"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">fullname</label>
                            <input type="text" id="fullname" v-model="users.fullname"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="type fullname" required>
                            <span v-show="error.hasOwnProperty('fullname')" class="bg-red-400/30 text-[10px] w-full text-red-900 border-red-600 rounded-md px-2 py-1 border-l-2 mt-2">{{ error.fullname }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">password</label>
                            <input type="password" id="password" v-model="users.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="type password" required>
                            <span v-show="error.hasOwnProperty('password')" class="bg-red-400/30 text-[10px] w-full text-red-900 border-red-600 rounded-md px-2 py-1 border-l-2 mt-2">{{ error.password }}</span>
                        </div>
                        <!-- <table class="w-full divide-y divide-gray-200">
                            <thead class="bg-orange-600">
                                <tr>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-white uppercase">
                                        Name
                                    </th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-white uppercase">
                                        NIK
                                    </th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-white uppercase">
                                        Email
                                    </th>
                                    <th scope="col" class="p-4 text-left text-xs font-medium text-white uppercase">

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
                            <span v-if="filterTeams.length <= 0" class="text-sm">Data tidak ditemukan, silahkan
                                tambahkan di menu Teams atau klik di <router-link to="/teams">Sini</router-link></span>
                        </table> -->
                        <div class="mt-5 gap-2">
                            <button @click="savedata" class="bg-orange-600 p-2  text-white rounded-md shadow-md hover:bg-orange-400 mr-3">Save Data</button>
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
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">User Manage</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of User Admin Panel
                                        dc</span>
                                </div>
                                <div class="flex-shrink-0">
                                    <button class="hidden md:block bg-orange-600 p-2 text-white rounded-md shadow-md hover:bg-orange-400" ref="show" @click="addnew">Add User</button>
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
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            ID
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Username
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Fullname
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white" v-for="(item, index) in user" :key="index">
                                                    <tr>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.id }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.username }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.fullname }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span @click="viewdetail(item.UID, item.id_user)" class="bg-green-500 p-2 text-white cursor-pointer"><i class="fa fa-pencil"></i></span>
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
    import baseLy from './baseLayoutAdmin.vue'
    import { VueFinalModal } from 'vue-final-modal';
    export default{
        name : 'userManage',
        components: {
                baseLy,
                VueFinalModal
            },
        data() {
            return {
                user        : [],
                url         : import.meta.env.VITE_APIBASE,
                token       : this.$storage.getStorageSync("token"),
                showModal   : false,
                users       : [],
                error       : []
            }
        },
        mounted() {
            this.getdata()
        },
        methods: {
            savedata(){
                this.loader = this.$loading.show({container: null,canCancel: false,});
                let data = {
                    "fullname" : this.users.fullname,
                    "username" : this.users.username,
                    "password" : this.users.password,
                }
                let header = {
                    headers: {
                    'Authorization': `Bearer ${this.token}` 
                    }
                }
                axios.post(this.url+ 'admin/user',data,header).then(({data})=>{
                    this.requirefield(data)
                    this.loader.hide();
                    if(data.status){
                        this.$notify({
                            title: 'Berhasil',
                            text: data.message,
                            type: 'success',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                        this.getdata()
                        this.showModal = false
                    }else{
                        this.$notify({
                            title: 'Gagal',
                            text: data.message,
                            type: 'error',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                    }
                })
            },
            requirefield(data){
                this.error = []
                if(data.hasOwnProperty('err')){
                    if(data.err.hasOwnProperty('username')){
                        this.error.username = data.err.username[0]
                    }
                    if(data.err.hasOwnProperty('password')){
                        
                        this.error.password = data.err.password[0] 
                    }
                    if(data.err.hasOwnProperty('fullname')){
                        
                        this.error.fullname = data.err.fullname[0] 
                    }
                }
            },
            addnew(){
                this.showModal = true;
            },
            getdata(){
                this.loader = this.$loading.show({container: null,canCancel: false,});
                let header = {
                    headers: {
                    'Authorization': `Bearer ${this.token}` 
                    }
                }
                axios.get(this.url + 'admin/getalluser',header).then(({data}) => {
                    this.loader.hide();
                    if(data.status){
                        this.$notify({
                            title: 'Berhasil',
                            text: data.message,
                            type: 'success',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                        this.user = data.data

                    }else{
                        this.$notify({
                            title: 'Gagal',
                            text: data.message,
                            type: 'error',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                    }
                })
            }
        },
    }
</script>