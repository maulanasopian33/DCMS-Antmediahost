<template>
    <div>
        <baseLy>
            <main>
            <div class="pt-6 px-4">
               <div class="w-full grid grid-cols-1  gap-4">
                   <div class="2xl:col-span-">
                       <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  md:h-fit">
                           <div class="flex items-center justify-between mb-4">
                               <div class="flex-shrink-0">
                                   <span
                                       class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Summary</span>
                                   <h3 class="text-base font-normal text-gray-500">Request Visit Data Center</h3>
                               </div>
                           </div>
                           <div id="main-chart">
                                <apexchart height="300" ref="chart" :options="chartOptions" :series="chartSeries"></apexchart>
                           </div>
                       </div>
                       
                   </div>

               </div>
               <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                  <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6">
                     <div class="mb-4 flex items-center justify-between">
                        <div>
                           <h3 class="text-xl font-bold text-gray-900 mb-2">Request Visit Dc Summary</h3>
                           <span class="text-base font-normal text-gray-500">This is a list of Request Visit Dc</span>
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
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                    <span @click="viewdetail(item.UID, item.id_user)" class="bg-green-500 p-2 text-white rounded-tl-md rounded-bl-md cursor-pointer"><i class="fa fa-eye"></i></span>
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
import baseLy from './baseLayoutAdmin.vue'
import VueApexCharts from "vue3-apexcharts";
export default {
    name : 'dashboardAdmin',
    components : {baseLy, apexchart: VueApexCharts},
    data() {
        return {
            visitdc : [],
            url         : import.meta.env.VITE_APIBASE,
            token       : this.$storage.getStorageSync("token"),
            chartOptions: {
               chart: {
                  type: "area",
               },
               xaxis: {
                  categories: [],
               },
            },
            chartSeries: [],
        }
    },
    mounted() {
        this.chartOptions.xaxis.categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.getdata()
    },
    methods: {
        viewdetail(datas, id_user){
            this.$storage.setStorageSync("user_id",id_user,86400000);
            this.$router.push('/visitdc/report/'+btoa(datas));
        },
        logout(){
            this.$storage.removeStorageSync("token");
            this.$storage.removeStorageSync("userId"); // user id admin
            this.$router.push('/admin/login')
        },
        getdata(){
            let header = {
                headers: {
                'Authorization': `Bearer ${this.token}` 
                }
            }
            axios.get(this.url + 'visitdc/',header).then(({data}) => {
                this.visitdc = this.filter(data.data);
                // console.log(this.groupdata(data.data))

                // update chart
                this.updateChart(this.groupdata(data.data,false,''),'All')
                this.updateChart(this.groupdata(data.data,true,'Installation'),'Installation')
                this.updateChart(this.groupdata(data.data,true,'Maintenance'),'Maintenance')
                this.updateChart(this.groupdata(data.data,true,'Troubleshoot'),'Troubleshoot')
                this.updateChart(this.groupdata(data.data,true,'Visit'),'Visit')
                this.updateChart(this.groupdata(data.data,true,'Replacement'),'Replacement')
                // limit for summary visit dc request
                this.visitdc.splice(5);
            }).catch((error) =>{
                this.$notify({
                title: 'Error',
                text: error.response.data.message,
                type: 'error',
                duration: 5000, // Durasi notifikasi dalam milidetik
                });
                this.logout()
            })
        },
        filter(temp){
            let sample= [];
                for (const key in temp) {
                    if (temp[key].success === 0) {
                        sample.push(temp[key])
                    }
                }
            return sample;
        },
        updateChart(data, name) {
        
         this.chartSeries.push({
            name: name,
            data : data
         })
    },
        groupdata(data, filter, datafilter){
            // Buat objek untuk menghitung berapa banyak data per bulan
            const countByMonth = {};
            // Iterasi melalui data\
            let tempdata = data;
            if(filter){
                tempdata = data.filter((item) => item.reason === datafilter);
            }

            tempdata.forEach(item => {
                const createdDate = new Date(item.Date);
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
        teamsconvert(data){
            let json = JSON.parse(data);
            return json.join();
        }
    },
}

</script>