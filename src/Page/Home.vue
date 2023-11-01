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
                           <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{{ sumvisitdc }}</span>
                           <h3 class="text-base font-normal text-gray-500">Request Visit Data Center</h3>
                        </div>
                     </div>
                     <div id="main-chart">
                        <apexchart ref="chart" :options="chartOptions" :series="chartSeries"></apexchart>
                     </div>
                  </div>
                  <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                     <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div class="flex items-center">
                           <div class="flex-shrink-0">
                              <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{{ sumvisitdc }}</span>
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
                                             Date
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Reason
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Data center
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody class="bg-white" >
                                       <tr v-for="(item, index) in visitdc" :key="index">
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             {{ item.Date }}
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             {{ item.reason }}
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             {{ item.data_center }}
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
                           <router-link to="/visitdc" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</router-link>
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
import axios from 'axios'
import VueApexCharts from "vue3-apexcharts";
import baseLy from './baseLayout.vue'
export default {
    name : 'HomePage',
    components: {  baseLy, apexchart: VueApexCharts, },
    data() {
      return {
         slidebar    : false,
         url         : import.meta.env.VITE_APIBASE,
         userId      : this.$storage.getStorageSync("user_id"),
         mydata      : '',
         myproduct   : null,
         sumproduct  : 0,
         sumvisitdc  : 0,
         visitdc     : '',
         chartOptions: {
        chart: {
          type: "area",
        },
        xaxis: {
          categories: [],
        },
      },
      chartSeries: [
        {
          name: "Visit DC",
          data: [],
        },
      ],
         
      }
    },
    mounted() {
      this.chartOptions.xaxis.categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    },
    created() {
      this.getproduct();
      this.getdata()
      this.check_session();
    },
    methods: {
      updateChart(data) {
         this.chartSeries = [{
            data : data
         }]
    },
      check_session(){
         if(this.$storage.isExpire("user_id") || !this.$storage.hasKey("user_id")){
            this.$router.push('/login')
         }
      },
      groupdata(data){
         // Buat objek untuk menghitung berapa banyak data per bulan
         const countByMonth = {};
         // Iterasi melalui data
         data.forEach(item => {
            const createdDate = new Date(item.created_at);
            const monthYearKey = `${createdDate.getMonth() + 1}-${createdDate.getFullYear()}`;
            if (!countByMonth[monthYearKey]) {
               countByMonth[monthYearKey] = 0;
            }
            countByMonth[monthYearKey]++;
         });
         let datas = [0,0,0,0,0,0,0,0,0,0,0,0];
         for (const key in countByMonth) {
            datas[key.split('-')[0]-1] = countByMonth[key];
            // .push(countByMonth[key]);
         }
         return datas;
      },
      getdata(){
         axios.get(this.url + 'visitdc/'+this.userId).then(({data}) => {
            this.visitdc = data.datas;
            this.sumvisitdc = data.datas.length;
            this.updateChart(this.groupdata(this.visitdc))
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