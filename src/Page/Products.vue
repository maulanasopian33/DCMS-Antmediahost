<template>
    <div>
        <baseLy>
            <main>
                <div class="pt-6 px-4">
                    <div class="w-full gap-4">
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Products</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of Your Product
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
    import baseLy from './baseLayout.vue'
    import axios from 'axios'
    import JwPagination from 'jw-vue-pagination';
    export default {
        name: "product",
        components: {
            baseLy,
            JwPagination
        },
        data() {
            return {
                url         : import.meta.env.VITE_APIBASE,
                productData : '',
                userId      : this.$storage.getStorageSync("user_id"),
            }
        },
        created() {
            this.getproduct();
        },
        methods: {
            getproduct() {
                axios.get(this.url + 'product?limit=all&id=' + this.userId).then(({data}) => {
                    this.productData = data.data;
                })
            }
        },
    }
</script>