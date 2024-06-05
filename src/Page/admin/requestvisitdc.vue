<template>
    <div>
        <baseLy>
            <main>
                <div class="pt-6 px-4">
                    <div class="w-full gap-4">
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Request Data Center</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of Request Data Center</span>
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
                                                            Date
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Name
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Reason
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Progress
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Data Center
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Teams
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white" v-for="(item, index) in requestdc" :key="index">
                                                    <tr>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.Date }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.lead_name || item.lead_signature }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.reason }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span :class="(item.status === 'Completed')? 'bg-green-500' :'bg-yellow-500'" class=' px-2 text-white rounded-full'>{{ item.status }}</span>
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.data_center }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ teamsconvert(item.teams) }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span @click="updateProgress(item.UID, item.status)" class="bg-yellow-500 p-2 text-white rounded-tl-md rounded-bl-md cursor-pointer"><i class="fa fa-check"></i></span>
                                                            <span @click="viewdetail(item.UID, item.id_user)" class="bg-green-500 p-2 text-white cursor-pointer"><i class="fa fa-eye"></i></span>
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
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mt-5">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Accepted Request Data Center</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of Accepted Request Data Center</span>
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
                                                            Date
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Name
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Reason
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Progress
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Data Center
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Teams
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white" v-for="(item, index) in acceptedRequestdc" :key="index">
                                                    <tr>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.Date }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.lead_name || item.lead_signature }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.reason }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span :class="(item.status === 'Accepted')? 'bg-green-500' :'bg-yellow-500'" class=' px-2 text-white rounded-full'>{{ item.status }}</span>
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.data_center }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ teamsconvert(item.teams) }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span @click="updateProgress(item.UID, item.status)" class="bg-yellow-500 p-2 text-white rounded-tl-md rounded-bl-md cursor-pointer"><i class="fa fa-check"></i></span>
                                                            <span @click="viewdetail(item.UID, item.id_user)" class="bg-green-500 p-2 text-white cursor-pointer"><i class="fa fa-eye"></i></span>
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
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mt-5">
                            <!-- all request -->
                            <div class="flex flex-col">
                                <div class="overflow-x-auto rounded-lg">
                                    <div class="align-middle inline-block min-w-full">
                                        <div class="shadow overflow-hidden sm:rounded-lg">
                                            <div class="py-5">
                                                <h3 class="text-xl font-bold text-gray-900 mb-2">History Request Data Center</h3>
                                                <span class="text-base font-normal text-gray-500">This is a list of History Request Data Center</span>
                                            </div>
                                            <table class="min-w-full divide-y divide-gray-200">
                                                <thead class="bg-orange-600">
                                                    <tr>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Date
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Name
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Reason
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Progress
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Data Center
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Teams
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white" v-for="(item, index) in showallrequest" :key="index">
                                                    <tr>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.Date }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.lead_name || item.lead_signature }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.reason }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span :class="(item.status === 'Completed') ? 'bg-green-500' :'bg-yellow-500'" class=' px-2 text-white rounded-full'>{{ item.status }}</span>
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.data_center }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ teamsconvert(item.teams) }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span @click="viewdetail(item.UID, item.id_user)" class="bg-green-500 p-2 rounded-l-md text-white cursor-pointer"><i class="fa fa-eye"></i></span>
                                                            <span @click="deletedata(item.UID)" class="bg-red-500 p-2 text-white rounded-tr-md rounded-br-md cursor-pointer"><i class="fa fa-trash"></i></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <nav aria-label="Page navigation example" class="my-4">
                                                <ul class="inline-flex -space-x-px">
                                                    <li @click="updateHandler(currentPage -1)" >
                                                        <p
                                                            class="cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3  ">Previous</p>
                                                    </li>
                                                    <li @click="updateHandler(index)" v-for="index in (pageCount)" :key="index">
                                                        <p class="cursor-pointer" :class="currentPage === index ? 'bg-orange-500 border border-gray-300 text-white hover:bg-blue-100 hover:text-orange-700  py-2 px-3' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3'">{{ index }}</p>
                                                    </li>
                                                    <li @click="updateHandler(currentPage +1)">
                                                        <p
                                                            class="cursor-pointer bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3  ">Next</p>
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
    import axios from 'axios';
    import baseLy from './baseLayoutAdmin.vue'
    export default {
        name: "visitDC",
        components: {
            baseLy,
        },
        data() {
            return {
                slidebar: false,
                modalVisible : false,
                url         : import.meta.env.VITE_APIBASE,
                userId      : this.$storage.getStorageSync("user_id"),
                token       : this.$storage.getStorageSync("token"),
                requestdc     : '',
                acceptedRequestdc : [],
                allrequest  : [],
                showallrequest  : [],
                loader      : null,
                currentPage: 1,
                perPage: 5,
                pageCount : 0
            }
        },
        mounted() {
            this.getdata();
        },
        methods: {
            paginatedItems(){
                const startIndex = (this.currentPage - 1) * this.perPage;
                const endIndex = startIndex + this.perPage;
                this.showallrequest = this.allrequest.slice(startIndex, endIndex);
            },
            updateHandler(page){
                if(page === 0){
                    this.currentPage = 1
                }else if (page > this.pageCount) {
                    this.currentPage = this.pageCount
                } else {
                    this.currentPage = page
                }
                this.paginatedItems()
            },
            viewdetail(datas, id_user){
                this.$storage.setStorageSync("user_id",id_user,86400000);
                this.$router.push('/requestdc/report/'+btoa(datas));
            },
            deletedata(id){
                this.loader = this.$loading.show({container: null,canCancel: false,});
                axios.post(this.url + 'visitdc/delete/'+id).then(({data}) => {
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
                            text: data.message,
                            type: 'error',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                    }
                })
            },
            updateProgress(id, status){
                
                this.loader = this.$loading.show({container: null,canCancel: false,});
                let header = {
                    headers: {
                    'Authorization': `Bearer ${this.token}` 
                    }
                }
                let dataUpdate = "";
                console.log(status)
                if(status === "Requested"){
                    dataUpdate = "Accepted"
                }else{
                    dataUpdate = "Completed";
                }

                axios.put(this.url + 'visitdc/update',{
                    uid : id,
                    status : dataUpdate
                },header).then(({data}) => {
                    this.loader.hide();
                    console.log(data)
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
                            text: data.message,
                            type: 'error',
                            duration: 5000, // Durasi notifikasi dalam milidetik
                        });
                    }
                })
            },
             getdata(){
                this.loader = this.$loading.show({container: null,canCancel: false,});
                let header = {
                    headers: {
                    'Authorization': `Bearer ${this.token}` 
                    }
                }
                 axios.get(this.url + 'visitdc', header).then(({data}) => {
                    this.loader.hide()
                    let temp = data.data
                    this.acceptedRequestdc = this.filter(temp, "Accepted")
                    this.allrequest = this.filter(temp, "Completed")
                    this.showallrequest = this.filter(temp, "Completed")
                    this.pageCount = (Math.ceil(temp.length / this.perPage)) - 1;
                    this.paginatedItems()
                    this.requestdc = this.filter(temp, "Requested")
                }).catch((error) =>{
                    this.$notify({
                        title: 'Error',
                        text: error.response.data.message,
                        type: 'error',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                    switch (error.response.status) {
                        case 401:
                            this.logout();
                            console.clear()
                            break;
                    
                        default:
                            break;
                    }

                })
            },
            logout(){
                this.$storage.removeStorageSync("token");
                this.$storage.removeStorageSync("userId");
                this.$router.push('/admin/login')
            },
            filter(temp, status){
                let sample= [];
                    for (const key in temp) {
                        if (temp[key].status === status) {
                            sample.push(temp[key])
                        }
                    }
                return sample;
            },
            teamsconvert(data){
                let json = JSON.parse(data);
                return json.join();
            }
        },
    }
</script>