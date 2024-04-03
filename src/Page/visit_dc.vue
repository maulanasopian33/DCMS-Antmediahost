<template>
    <div>
        <baseLy>
            <main>
                <div class="pt-6 px-4">
                    <div class="w-full gap-4">
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Request DC</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of Request 
                                        DC</span>
                                </div>
                                <div class="flex-shrink-0">
                                    <router-link to="/request/add"
                                        class="text-sm font-medium text-white bg-orange-600 hover:bg-orange-300 rounded-lg py-2 px-4 cursor-pointer">Add New</router-link>
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
                                                            Data Center
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                            Status
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
                                                <tbody class="bg-white" v-for="(item, index) in visitdc" :key="index">
                                                    <tr>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.Date }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.lead_name }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.reason }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.data_center }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            <span :class="item.success ? 'bg-green-500' : 'bg-yellow-600'" class=" p-2 text-white rounded-md cursor-pointer">{{ item.success ? 'Done' : "Onprogress" }}</span>
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ teamsconvert(item.teams) }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 text-end">
                                                            <a :href="item.file_surat" target="_blank" v-show="item.reason === 'Installation' || item.reason === 'Unloading'" :class="(item.file_surat == null) ? 'cursor-not-allowed bg-green-200' : 'cursor-pointer bg-green-500'" class="p-2 text-white rounded-tl-md rounded-bl-md"><i class="fa fa-download"></i></a>
                                                            <span @click="viewdetail(item.UID)" :class="(item.reason === 'Installation' || item.reason === 'Unloading') ? '' : 'rounded-lt-md rounded-lb-md'" class="bg-yellow-500 p-2 text-white cursor-pointer"><i class="fa fa-eye"></i></span>
                                                            <span :class="(!item.success) ? 'bg-red-500 cursor-pointer' : 'bg-red-200 cursor-not-allowed'" @click="deletedata(item.UID)" class=" p-2 text-white rounded-tr-md rounded-br-md"><i class="fa fa-trash"></i></span>
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
    import baseLy from './baseLayout.vue'
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
                visitdc     : '',
                loader      : null,
            }
        },
        mounted() {
            this.getdata();
        },
        methods: {
            viewdetail(datas){
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
            getdata(){
                axios.get(this.url + 'visitdc/'+this.userId).then(({data}) => {
                    this.visitdc = data.datas
                })
            },
            teamsconvert(data){
                let json = JSON.parse(data);
                return json.join();
            }
        },
    }
</script>