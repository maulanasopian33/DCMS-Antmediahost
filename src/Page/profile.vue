<template>
    <div>
      <baseLy>
        <vue-final-modal v-model="modalKtp">
                <div class="flex justify-center items-center h-screen">
                    <div class="bg-white w-fit m-3 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                        <img :src="mydata.ktp" alt="">
                        <div class="inline">
                            <button @click="modalKtp = false" class="bg-blue-600 text-white py-3 px-10 rounded-md ml-2">Close</button>
                        </div>
                    </div>
                </div>

            </vue-final-modal>
         <main>
            <div class="pt-6 px-4">
               <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                  <div class="2xl:col-span-2">
                     <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  h-fit">
                     <div class="flex items-center justify-between mb-4">
                        <div class="flex-shrink-0">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Detail Profile</h3>
                           <span class="text-base font-normal text-gray-500">This is a list of history visit dc</span>
                        </div>
                        <div class="flex-shrink-0">
                           <!-- <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">Update Data</a> -->
                        </div>
                     </div>
                     <div >
                        <div class="grid text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold ">Full Name</div>
                                <div class="px-4 py-2 break-words">{{ mydata.name }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold ">Email</div>
                                <div class="px-4 py-2 break-words">{{ mydata.email }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold ">Phone</div>
                                <div class="px-4 py-2 break-words">{{ mydata.phone }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold ">NIK</div>
                                <div class="px-4 py-2 break-words">{{ mydata.nik }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">KTP</div>
                                <div class="px-4 py-2" @click="modalKtp = true">View KTP</div>
                            </div>
                            
                        </div>
                     </div>
                  </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 h-ful">
                     <div class="mb-4 flex items-center justify-between">
                        <div>
                           <h3 class="text-xl font-bold text-gray-900 mb-2">Your Teams</h3>
                           <span class="text-base font-normal text-gray-500">This is a list of Teams</span>
                        </div>
                     </div>
                     <div class="flex flex-col mt-8">
                        <div class="overflow-x-auto rounded-lg">
                           <div class="align-middle inline-block min-w-full">
                              <div class="shadow overflow-hidden sm:rounded-lg">
                                <table class="min-w-full overflow-y-auto overflow-auto divide-y divide-gray-200">
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
                                                X
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
               <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                  <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-80">
                     <div class="mb-4 flex items-center justify-between">
                        <div>
                           <h3 class="text-xl font-bold text-gray-900 mb-2">Your Product</h3>
                           <span class="text-base font-normal text-gray-500">This is a list of Product</span>
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
                                                Order Id
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Product Name
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Domain
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Registration Date
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white">
                                        <tr v-for="(item, index) in productData" :key="index">
                                            <td
                                                class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                {{ item.orderId }}
                                            </td>
                                            <td
                                                class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                {{ item.productName }}
                                            </td>
                                            <td
                                                class="p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                                                {{ item.domain }}
                                            </td>
                                            <td
                                                class="p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                                                {{ item.regDate }}
                                            </td>
                                            <td
                                                class="p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                                                {{ item.status }}
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
import axios from 'axios'
import baseLy from './baseLayout.vue'
import { VueFinalModal } from 'vue-final-modal';
export default {
    name : 'HomePage',
    components: {  baseLy,VueFinalModal },
    data() {
      return {
         modalKtp    : false,
         url         : import.meta.env.VITE_APIBASE,
         productData : '',
         userId      : this.$storage.getStorageSync("user_id"),
         teams       : '',
         mydata      : ''
      }
    },
    created() {
      this.check_session();
      this.getproduct();
      this.getteams();
      this.getUserData();
    },
    methods: {
      check_session(){
         if(this.$storage.isExpire("user_id")){
            this.$router.push('/login')
         }
      },
      getproduct() {
            axios.get(this.url + 'product?limit=all&id=' + this.userId).then(({data}) => {
                this.productData = data.data;
            })
        },
        getteams(){
            axios.get(this.url + 'teams/'+this.userId).then(({data}) => {
                this.teams = data.datas;
            })
        },
        getUserData(){
            axios.get(this.url + 'getUser/' + this.userId).then(({data}) => {
                this.mydata = data.data
                console.log(data.data)
            })
        }
    },
}
</script>