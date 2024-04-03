<template>
    <div>
        <baseLy>
            <vue-final-modal v-model="showModal">
                <div class="flex justify-center items-center h-screen">
                    <div
                        class="bg-white w-fit md:w-[30%] m-5 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                        <h3 class="text-2xl mb-4">Change Password</h3>
                        <div class="mb-3 w-full">
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input type="password" id="password" v-model="data.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="Type Password" required>
                        </div>
                        <div class="mb-3">
                            <label for="repassword"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Re-Password</label>
                            <input type="password" id="repassword" v-model="data.repassword"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="Type Re-Password" required>
                        </div>

                        <div class="mt-5 gap-2">
                            <button @click="updatepassword()"
                                class="bg-orange-600 p-2  text-white rounded-md shadow-md hover:bg-orange-400 mr-3">Save
                                Data</button>
                            <button @click="showModal = false">Close</button>
                        </div>
                    </div>
                </div>

            </vue-final-modal>
            <vue-final-modal v-model="addvpn">
                <div class="flex justify-center items-center h-screen">
                    <div
                        class="bg-white w-fit md:w-[30%] m-5 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                        <h3 class="text-2xl mb-4">Add New VPN</h3>
                        <div class="mb-3 w-full">
                            <label for="username"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                            <input type="text" id="username" v-model="newdata.username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="Type username" required>
                        </div>
                        <div class="mb-3 w-full">
                            <label for="remote"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Local Address
                                (tidak perlu diubah):</label>
                            <input type="text" id="remote" v-model="newdata.remote"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="Type Remote IP Address" equired>
                        </div>
                        <div class="mb-3 w-full">
                            <label for="local"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remote IP
                                Address:</label>
                            <input type="text" id="local" v-model="newdata.local"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="Type Local address" required>
                        </div>
                        <div class="mb-3 w-full">
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input type="password" id="password" v-model="newdata.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="Type Password" required>
                        </div>
                        <div class="mb-3">
                            <label for="repassword"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Re-Password</label>
                            <input type="password" id="repassword" v-model="newdata.repassword"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="Type Re-Password" required>
                        </div>

                        <div class="mt-5 gap-2">
                            <button @click="addnewdata()"
                                class="bg-orange-600 p-2  text-white rounded-md shadow-md hover:bg-orange-400 mr-3">Save
                                Data</button>
                            <button @click="addvpn = false">Close</button>
                        </div>
                    </div>
                </div>

            </vue-final-modal>
            <main>
                <div class="pt-6 px-4">
                    <div class="w-full gap-4">
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">VPN Manage</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of VPN</span>
                                </div>
                                <div class="flex-shrink-0">
                                    <button
                                        class="hidden md:block bg-orange-600 p-2 text-white rounded-md shadow-md hover:bg-orange-400"
                                        @click="addvpn = true"> Add VPN Account</button>
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
                                                            Service
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            User IP
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Assign
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Status
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white" v-for="(item, index) in showvpndata"
                                                    :key="index">
                                                    <tr>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ index + 1 }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.name }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.service }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item['remote-address'] }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <div class="w-80 md:w-72">
                                                                <p
                                                                    v-show="showAssignEdit === '' || showAssignEdit.id !== index">
                                                                    {{ item['assign'] }}</p>
                                                                <model-select :ref="item['name']" :options="users"
                                                                    style="width: 100%;" v-model="selectedAssign"
                                                                    v-show="showAssignEdit.id === index"
                                                                    placeholder="Choose Assign">
                                                                </model-select>
                                                            </div>
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span class="py-1 px-3 text-white rounded-full text-xs"
                                                                :class="(item['disabled'] === 'false') ? 'bg-green-500' : ' bg-red-500'">
                                                                {{ (item['disabled'] === 'false') ? 'Enabled' :
                'Disabled' }}
                                                            </span>
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span @click="isdisabled('enable', item['.id'])"
                                                                class="bg-blue-500 p-2 ml-[1px] text-white rounded-md cursor-pointer hover:bg-blue-400">Enable</span>
                                                            <span
                                                                @click="isdisabled('disable', item['.id'], item['name'])"
                                                                class="bg-blue-500 p-2 ml-[1px] text-white rounded-md cursor-pointer hover:bg-blue-400">Disable</span>
                                                            <span @click="confimdelete(item['.id'], item['name'])"
                                                                class="bg-blue-500 p-2 ml-[1px] text-white rounded-md cursor-pointer hover:bg-blue-400">Delete</span>
                                                            <span @click="setAssign(index, item['name'])"
                                                                class="bg-blue-500 p-2 ml-[1px] text-white rounded-md cursor-pointer hover:bg-blue-400">Set
                                                                Assign</span>
                                                            <span @click="showmodal(item['.id'], item['name'])"
                                                                class="bg-blue-500 p-2 ml-[1px] text-white rounded-md cursor-pointer hover:bg-blue-400">Change
                                                                Password</span>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            <nav aria-label="Page navigation example" class="my-4 select-none">
                                                <ul class="inline-flex -space-x-px">
                                                    <li @click="updateHandler(currentPage - 1)">
                                                        <p
                                                            class="cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3  ">
                                                            Previous</p>
                                                    </li>
                                                    <li @click="updateHandler(index)" v-for="index in (pageCount)"
                                                        :key="index">
                                                        <p class="cursor-pointer"
                                                            :class="currentPage === index ? 'bg-orange-500 border border-gray-300 text-white hover:bg-blue-100 hover:text-orange-700  py-2 px-3' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3'">
                                                            {{ index }}</p>
                                                    </li>
                                                    <li @click="updateHandler(currentPage +1)">
                                                        <p
                                                            class="cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3  ">
                                                            Next</p>
                                                    </li>
                                                </ul>
                                            </nav>
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
import baseLy from './baseLayoutAdmin.vue'
import { decrypt } from '../../utils/RSAClass.js'
import { VueFinalModal } from 'vue-final-modal';
import { ModelSelect } from "vue-search-select"
import axios from 'axios'
export default {
    name: 'vpn',
    components: {
        baseLy,
        VueFinalModal,
        ModelSelect
    },
    data() {
        return {
            url: import.meta.env.VITE_APIBASE,
            token: this.$storage.getStorageSync("token"),
            vpndata: [],
            showModal: false,
            data: [],
            showvpndata: [],
            currentPage: 1,
            perPage: 5,
            pageCount: 0,
            loader: null,
            addvpn: false,
            newdata: [],
            users: [],
            selectedAssign: [],
            showAssignEdit: ''
        }
    },
    watch: {
        selectedAssign(newValue, oldValue) {
            this.updateAssign(newValue)
        },
    },
    mounted() {
        this.newdata.local = '172.17.0.1'
        this.newdata.remote = '172.17.0.x'
        this.getdata()
    },
    methods: {
        updateAssign(name) {
            if (name.hasOwnProperty('value')) {
                this.loader = this.$loading.show({ container: null, canCancel: false, });
                let header = {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                }
                let postdata = ''
                if (name.value === '') {
                    postdata = {
                        'usernameVPN': this.showAssignEdit.name,
                        'usernameUser': this.showvpndata[this.showAssignEdit.id]['assign'],
                        'setNull': true
                    }
                } else {
                    postdata = {
                        'usernameVPN': this.showAssignEdit.name,
                        'usernameUser': name.value,
                        'setNull': false
                    }
                }
                axios.post(this.url + 'admin/vpn/assign', postdata, header).then(({ data }) => {
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
                }).catch((error) => {
                    this.$notify({
                        title: 'Gagal',
                        text: error.message,
                        type: 'error',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                    this.loader.hide()
                })
                this.vpndata[this.showAssignEdit.id]['assign'] = name.value
                this.showvpndata[this.showAssignEdit.id]['assign'] = name.value
                this.showAssignEdit = ''
            }
        },
        setAssign(id, name) {
            if (this.showAssignEdit.hasOwnProperty('id') && this.showAssignEdit.id === id) {
                this.showAssignEdit = ''
                return true;
            }
            this.selectedAssign = []
            this.showAssignEdit = { id, name }
        },
        paginatedItems() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            this.showvpndata = this.vpndata.slice(startIndex, endIndex);
        },
        updateHandler(page) {
            if (page === 0) {
                this.currentPage = 1
            } else if (page > this.pageCount) {
                this.currentPage = this.pageCount
            } else {
                this.currentPage = page
            }
            this.paginatedItems()
        },
        getdata() {
            this.loader = this.$loading.show({ container: null, canCancel: false, });
            let header = {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
            axios.get(this.url + 'admin/vpn', header).then(({ data }) => {
                console.log(data)
                let datadecrypt = JSON.parse(decrypt(data.data))
                this.getuser(datadecrypt)
            })
        },
        getuser(datadecrypt) {
            let header = {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
            axios.get(this.url + 'admin/getUser', header).then(({ data }) => {
                let datas = data.data
                let mergeData = datadecrypt.map((item) => {
                    let matchingdata = datas.find((item2) => { return item2.vpn === item.name })
                    if (matchingdata) {
                        return {
                            ...item,
                            ['assign']: matchingdata.name
                        }
                    }
                    return {
                        ...item,
                        ['assign']: "Null"
                    }
                })
                this.vpndata = mergeData
                this.showvpndata = mergeData
                this.pageCount = (Math.ceil(mergeData.length / this.perPage)) - 1;
                this.paginatedItems()
                this.loader.hide()
                this.users.push({ value: '', text: 'As Null' })
                datas.forEach(element => {
                    this.users.push({ value: element['name'], text: element['name'] })
                });
            })
        },
        isdisabled(status, username, name) {
            this.loader = this.$loading.show({ container: null, canCancel: false, });
            let header = {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
            let datas = {
                'status': status,
                'username': username,
                'name': name
            }
            axios.post(this.url + 'admin/vpn/disable', datas, header).then(({ data }) => {
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
            })
        },
        confimdelete(username, name) {
            if (confirm(`Apakah anda yakin ingin menghapus akun ${name}?`) == true) {
                this.deletevpn(username, name)
            }
        },
        deletevpn(username, name) {
            this.loader = this.$loading.show({ container: null, canCancel: false, });
            let header = {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
            let datas = {
                'username': username,
                'name': name
            }
            axios.post(this.url + 'admin/vpn/delete', datas, header).then(({ data }) => {
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
            })
        },
        showmodal(username, name) {
            this.data.name = name
            this.data.username = username
            this.showModal = true
        },
        updatepassword() {
            this.loader = this.$loading.show({ container: null, canCancel: false, });
            let header = {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
            let datas = {
                'username': this.data.username,
                'name': this.data.name,
                'Password': this.data.password
            }
            axios.post(this.url + 'admin/vpn/change', datas, header).then(({ data }) => {
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
            })
        },
        addnewdata() {
            this.loader = this.$loading.show({ container: null, canCancel: false, });
            let header = {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
            axios.post(this.url + 'admin/vpn/create', newdata, header).then(({ data }) => {
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
            })
        }
    },
}
</script>