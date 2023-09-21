<template>
    <div>
      <baseLy>
         <main>
            <div class="pt-6 px-4">
               <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                  <div class="2xl:col-span-2">
                     <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  md:h-3/4">
                     <div class="flex items-center justify-between mb-4">
                        <div class="flex-shrink-0">
                           <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$45,385</span>
                           <h3 class="text-base font-normal text-gray-500">Sales this week</h3>
                        </div>
                     </div>
                     <div id="main-chart">
                        <Line class="h-full" :data="data" :options="options" />
                     </div>
                  </div>
                  <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                     <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div class="flex items-center">
                           <div class="flex-shrink-0">
                              <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">2,340</span>
                              <h3 class="text-base font-sm text-gray-500">Visit DC</h3>
                           </div>
                        </div>
                     </div>
                     <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div class="flex items-center">
                           <div class="flex-shrink-0">
                              <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{{ sumproduct }}</span>
                              <h3 class="text-base font-normal text-gray-500">Product</h3>
                           </div>
                        </div>
                     </div>
                     <!-- <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div class="flex items-center">
                           <div class="flex-shrink-0">
                              <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                              <h3 class="text-sm font-normal text-gray-500">User signups this week</h3>
                           </div>
                        </div>
                     </div> -->
                  </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class="mb-4 flex items-center justify-between">
                        <div>
                           <h3 class="text-xl font-bold text-gray-900 mb-2">History Visit DC</h3>
                           <span class="text-base font-normal text-gray-500">This is a list of history visit dc</span>
                        </div>
                        <div class="flex-shrink-0">
                           <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                        </div>
                     </div>
                     <div class="flex flex-col mt-8">
                        <div class="overflow-x-auto rounded-lg">
                           <div class="align-middle inline-block min-w-full">
                              <div class="shadow overflow-hidden sm:rounded-lg">
                                 <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                       <tr>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Transaction
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Date & Time
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Amount
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody class="bg-white">
                                       <tr>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             Payment from <span class="font-semibold">Bonnie Green</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 23 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $2300
                                          </td>
                                       </tr>
                                       <tr class="bg-gray-50">
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                             Payment refund to <span class="font-semibold">#00910</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 23 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             -$670
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             Payment failed from <span class="font-semibold">#087651</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 18 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $234
                                          </td>
                                       </tr>
                                       <tr class="bg-gray-50">
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                             Payment from <span class="font-semibold">Lana Byrd</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 15 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $5000
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             Payment from <span class="font-semibold">Jese Leos</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 15 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $2300
                                          </td>
                                       </tr>
                                       <tr class="bg-gray-50">
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                             Payment from <span class="font-semibold">THEMESBERG LLC</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 11 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $560
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             Payment from <span class="font-semibold">Lana Lysle</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 6 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $1437
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
                           <h3 class="text-xl font-bold text-gray-900 mb-2">Product Summary</h3>
                           <span class="text-base font-normal text-gray-500">This is a list of Product</span>
                        </div>
                        <div class="flex-shrink-0">
                           <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                        </div>
                     </div>
                     <div class="flex flex-col mt-8">
                        <div class="overflow-x-auto rounded-lg">
                           <div class="align-middle inline-block min-w-full">
                              <div class="shadow overflow-hidden sm:rounded-lg">
                                 <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                       <tr>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Order ID
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Product Name
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Domain
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Registration Date
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Status
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody class="bg-white">
                                       <tr v-for="(item, index) in myproduct" :key="index">
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             {{ item.orderId }}
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             {{ item.productName }}
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                                             {{ item.domain }}
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                                             {{ item.regDate }}
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                                             <span class="bg-green-600 text-white px-4 py-1 rounded-full">{{ item.status }}</span>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 h-80">
                     <!-- <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3> -->
                     <div class="block w-full overflow-x-auto">
                       <!-- isi card -->
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </baseLy>
    </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import axios from 'axios'
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend } from 'chart.js'
import baseLy from './baseLayout.vue'
ChartJS.register(
         CategoryScale,
         LinearScale,
         PointElement,
         LineElement,
         Title,
         Tooltip,
         Legend
      )
export default {
    name : 'HomePage',
    components: { Line, baseLy },
    data() {
      return {
         slidebar    : false,
         url         : import.meta.env.VITE_APIBASE,
         userId      : '1',
         mydata      : '',
         myproduct   : null,
         sumproduct  : 0,
         data: {
               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
               datasets: [{
                  label: 'Data One',
                  backgroundColor: '#f87979',
                  data: [40, 39, 10, 40, 39, 80, 40]
               }]
            },
         options: {
               responsive: true,
               maintainAspectRatio: false
            }
      }
    },
    created() {
      this.getuser();
      this.getproduct();
    },
    methods: {
      getuser(){
         axios.get(this.url+'getUser/'+this.userId).then(({data})=>{
            this.mydata = data.data
            console.log(data.data.name);
         })
      },
      getproduct(){
         axios.get(this.url+'product?limit=all&id='+this.userId).then(({data})=>{
            let datas = data.data;
            this.sumproduct = datas.length;
            this.myproduct = datas.slice(0, 2);
         })
      }
    },
}
</script>