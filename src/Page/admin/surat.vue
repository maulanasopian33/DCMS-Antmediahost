<template>
    <div>
        <baseLy>
            <main>
                <div class="pt-6 px-4">
                    <div class="w-full gap-4">
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Manage Surat</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of Request visit
                                        dc</span>
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
                                                <tbody class="bg-white">
                                                        <tr v-for="(item, index) in visitdc" :key="index" class="hover:bg-slate-100 cursor-pointer">
                                                            <td
                                                                class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900 hover:underline">
                                                                <router-link :to="'/admin/surat/'+ encode(item.UID)">
                                                                    {{ item.Date }}
                                                                </router-link>
                                                            </td>
                                                            <td
                                                                class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                <router-link :to="'/admin/surat/'+ encode(item.UID)">
                                                                    {{ item.lead_name }}
                                                                </router-link>
                                                            </td>
                                                            <td
                                                                class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                <router-link :to="'/admin/surat/'+ encode(item.UID)">
                                                                    {{ item.reason }}
                                                                </router-link>
                                                            </td>
                                                            <td
                                                                class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                <span :class="(item.success)? 'bg-green-500' :'bg-yellow-500'" class=' px-2 text-white rounded-full'>{{ (item.success)? "Selesai":"Request" }}</span>
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
                                                                class="p-4 whitespace-nowrap text-end text-sm font-normal text-gray-900">
                                                                <a v-show="item.file_surat" :href="item.file_surat" target="_blank" class="bg-yellow-500 p-2 text-white rounded-tl-md rounded-bl-md cursor-pointer"><i class="fa fa-file-pdf"></i></a>
                                                                <span @click="viewdetail(item.UID, item.id_user)" class="bg-green-500 p-2 text-white cursor-pointer"><i class="fa fa-eye"></i></span>
                                                                <!-- <span @click="deletedata(item.UID)" class="bg-red-500 p-2 text-white rounded-tr-md rounded-br-md cursor-pointer"><i class="fa fa-trash"></i></span> -->
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
    export default {
        name: "surat",
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
                visitdc     : '',
                loader      : null,
            }
        },
        mounted() {
            this.getdata();
        },
        methods: {
            viewdetail(datas, id_user){
                this.$storage.setStorageSync("user_id",id_user,86400000);
                this.$router.push('/requestdc/report/'+btoa(datas));
            },
            encode(data){
                let encode = btoa(data);
                return encode;
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
                this.loader = this.$loading.show({container: null,canCancel: false,});
                let header = {
                    headers: {
                    'Authorization': `Bearer ${this.token}` 
                    }
                }
                 axios.get(this.url + 'visitdc',header).then(({data}) => {
                    this.loader.hide()
                    let temp = data.data
                    this.visitdc = this.filter(temp)
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
            filter(temp){
                let sample= [];
                    for (const key in temp) {
                        if (temp[key].success === 1 && temp[key].reason === 'Installation' || temp[key].reason === 'Unloading' ) {
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