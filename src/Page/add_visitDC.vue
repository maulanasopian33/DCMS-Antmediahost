<template>
    <div>
        <baseLy>
            <main>
                <vue-final-modal v-model="reasonmodal" >
                    <div class="flex justify-center items-center h-screen">
                        <div class="bg-white w-[90%] md:w-[50%] m-5 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                            <h3 class="text-2xl mb-4">Add Server</h3>
                            <div class="mb-2">
                                <label for="add-product"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" required>Choose Product <span class="text-xs text-red-500">*</span></label>
                                <div class="w-full">
                                    <model-select
                                        ref="select"
                                        id="add-product"                                                     
                                        :options="pendingServer"
                                        style="width: 100%;"
                                        v-model="tempdata.productid"
                                        required
                                        placeholder="Choose Product">
                                    </model-select>
                                </div>
                                <span id="error-add-product" class="text-xs text-red-600" hidden>error</span>
                            </div>
                            <div class="mb-2">
                                <label for="add-merek" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Merek &
                                    Type <span class="text-xs text-red-500">*</span></label>
                                <input type="text" v-model="tempdata.merek" id="add-merek"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="merek & type server" required>
                                <span id="error-add-merek" class="text-xs text-red-600" hidden>error</span>
                            </div>
                            <div class="mb-2">
                                <label for="add-categoryServer"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category Server <span class="text-xs text-red-500">*</span></label>
                                <select
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="Railkit" id="add-categoryServer" required @change="optionDataserver($event,'category')">
                                    <option value="#" selected>Category Server</option>
                                    <option value="Branded">Branded</option>
                                    <option value="Rakitan">Rakitan</option>
                                </select>
                                <span id="error-add-categoryServer" class="text-xs text-red-600" hidden>error</span>
                            </div>
                            <div class="mb-2">
                                <label for="add-sn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">SN (Serial
                                    Number) <span class="text-xs text-red-500">*</span></label>
                                <input type="text" v-model="tempdata.sn" id="add-sn"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="SN (Serial Number)" required>
                                <span id="error-add-sn" class="text-xs text-red-600" hidden>error</span>
                            </div>
                            <div class="mb-2">
                                <label for="add-ukuran" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Size
                                    Server <span class="text-xs text-red-500">*</span></label>
                                    <select
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                        placeholder="Size Server" id="add-ukuran" required @change="optionDataserver($event,'ukuran')">
                                        <option value="#" selected>Size Server</option>
                                        <option value="1U">1U</option>
                                        <option value="2U">2U</option>
                                        <option value="4U">4U</option>
                                        <option value="Slim Case">Slim Case</option>
                                        <option value="Full Tower">Full Tower</option>
                                    </select>
                                    <span id="error-add-ukuran" class="text-xs text-red-600" hidden>error</span>
                            </div>
                            <div class="mb-2">
                                <label for="add-psu" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">PSU <span class="text-xs text-red-500">*</span></label>
                                <input type="text" v-model="tempdata.psu"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="Power Suplay" id="add-psu" required>
                                <span id="error-add-psu" class="text-xs text-red-600" hidden>error</span>
                            </div>
                            <div class="mb-2">
                                <label for="add-railkit"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Railkit <span class="text-xs text-red-500">*</span></label>
                                <select
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="Railkit" id="add-railkit" required @change="optionDataserver($event,'railkit')">
                                    <option value="#" selected>Available Railkit</option>
                                    <option value="Tersedia">Tersedia</option>
                                    <option value="Tidak Tersedia">Tidak Tersedia</option>
                                </select>
                                <span id="error-add-railkit" class="text-xs text-red-600" hidden>error</span>
                            </div>
                            <div class="flex mt-5 gap-2">
                            <button @click="addserver()" class="bg-orange-600 rounded-md text-white py-2 px-4">Save</button>
                            <button @click="reasonmodal = false">Close</button>
                            </div>
                        </div>
                    </div>
                    
                </vue-final-modal>
                <AddTeams ref="addTeam" @update="getteams()"></AddTeams>
                <div class="pt-6 px-4">
                    <div class="w-full gap-4">
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Add Request DC</h3>
                                    <!-- <span class="text-base font-normal text-gray-500">This is a list of history Request dc</span> -->
                                </div>
                            </div>
                            <div class="flex flex-col mt-8">
                                <div class="overflow-x-auto rounded-lg">
                                    <div class="align-middle inline-block w-full">
                                        <div class="shadow overflow-hidden sm:rounded-lg">
                                            <div class="grid gap-6 mb-6 lg:grid-cols-2">
                                                <div>
                                                    <label for="full_name"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full
                                                        Name <span class="text-xs text-red-500">*</span></label>
                                                    <input disabled type="text" v-model="mydata.name"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Name" id="fullname">
                                                        <span v-if="errors.name" class="text-xs text-red-600">{{ errors.name[0] }}</span>
                                                </div>
                                                <div>
                                                    <label for="email"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email <span class="text-xs text-red-500">*</span></label>
                                                    <input type="email" v-model="mydata.email" id="email"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Email" required>
                                                    <span v-if="errors.email" class="text-xs text-red-600">{{ errors.email[0] }}</span>
                                                </div>
                                                <div>
                                                    <label for="phone"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                                                        Number <span class="text-xs text-red-500">*</span></label>
                                                    <input type="tel" v-model="mydata.phone" id="phone"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="(62) 123-456-789"
                                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                                                    <span v-if="errors.phone" class="text-xs text-red-600">{{ errors.phone[0] }}</span>
                                                </div>
                                                <div>
                                                    <label for="nik"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NIK <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.nik" id="nik"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="NIK" required>
                                                    <span v-if="errors.nik" class="text-xs text-red-600">{{ errors.nik[0] }}</span>
                                                </div>
                                                <div>
                                                    <label for="reason"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reason <span class="text-xs text-red-500">*</span></label>
                                                        <select 
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                            placeholder="Reason" id='reason' required @change="optionData($event,'reason')">
                                                            <option value="#" selected>Reason</option>
                                                            <option value="visit DC">Visit DC</option>
                                                            <option value="Installation">Installation</option>
                                                            <option value="Maintenance">Maintenance</option>
                                                            <option value="Unloading">Unloading</option>
                                                            
                                                        </select>
                                                        <span v-if="errors.reason" class="text-xs text-red-600">{{ errors.reason[0] }}</span>
                                                </div>
                                                <div>
                                                    <label for="dc"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Data Center <span class="text-xs text-red-500">*</span></label>
                                                        <select
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                            placeholder="Data center" id="dc" required @change="optionData($event,'data_center')">
                                                            <option value="#" selected>Data Center</option>
                                                            <option value="Area 31">Area 31</option>
                                                            <option value="Technovillage">Technovillage</option>
                                                            <option value="Gedung Cyber">Gedung Cyber</option>
                                                        </select>
                                                        <span v-if="errors.data_center" class="text-xs text-red-600">{{ errors.data_center[0] }}</span>
                                                </div>
                                                <div>
                                                    <label for="company"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company
                                                        Name <span class="text-xs text-red-500">*</span></label>
                                                    <input name="company" id="company" type="text" v-model="mydata.company"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Company Name">
                                                    <span v-if="errors.company" class="text-xs text-red-600">{{ errors.company[0] }}</span>
                                                </div>
                                                <div>
                                                    <label for="date"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date <span class="text-xs text-red-500">*</span></label>
                                                        <VueDatePicker name="date" id="date" v-model="mydata.date" model-type="iso"
                                                        ></VueDatePicker>
                                                    <span v-if="errors.date" class="text-xs text-red-600">{{ errors.date[0] }}</span>
                                                </div>
                                            </div>
                                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">File KTP</label>
                                            <div class="flex">
                                                <div class=" bg-grey-lighter mb-5">
                                                    <label
                                                        class="w-32 md:w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
                                                        <svg class="w-8 h-8" fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path
                                                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                                        </svg>
                                                        <span class="mt-2 text-sm md:text-base leading-normal">Select a file</span>
                                                        <input @change="onFilePicked()" ref="file" type='file' class="hidden" />
                                                    </label>
                                                    <span v-if="errors.filektp" class="text-xs text-red-600">{{ errors.filektp[0] }}</span>
                                                </div>
                                                <div class=" bg-grey-lighter mb-5 ml-3 relative">
                                                    <article tabindex="0"
                                                        class="group w-full h-28 rounded-md focus:outline-none focus:shadow-outline bg-gray-300 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                                        <img :src="this.file.length == 0 ? '/placeholder.jpg' : this.file[0].data"
                                                            alt="upload preview"
                                                            class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                                                        <section
                                                            class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                                            <h1 class="flex-1">{{ this.file.name }}</h1>
                                                            <div class="flex">
                                                                <span class="p-1" >
                                                                    <i>
                                                                        <svg class="fill-current w-4 h-4 ml-auto pt-"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24" height="24" viewBox="0 0 24 24">
                                                                            <path
                                                                                d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                                                                        </svg>
                                                                    </i>
                                                                </span>

                                                                <p class="p-1 size text-xs"></p>
                                                                <button @click="this.file = []"
                                                                    class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                                                    <svg class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <path class="pointer-events-none"
                                                                            d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </section>
                                                    </article>
                                                </div>
                                            </div>
                                            <div>
                                                <label for="data center" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teams <span class="text-xs text-red-500">*</span></label>
                                                <div class="flex m-2">
                                                    <div class="w-2/3 md:w-1/2">
                                                        <model-select
                                                            ref="select"                                                     
                                                            :options="teams"
                                                            style="width: 100%;"
                                                            v-model="teamitem"
                                                            placeholder="Choose Teams">
                                                        </model-select>
                                                    </div>
                                                    <button @click="this.$refs.addTeam.showmodal()" class="bg-orange-600 rounded-md text-sm text-white p-2 mx-2">Add New Team</button>  
                                                    <button @click="includeme()" class="bg-orange-600 rounded-md text-sm text-white p-2 mx-2">Include Me</button>  
                                                </div>
                                            </div>
                                            <div class="sm:overflow-y-auto max-w-full">
                                                <table class="min-w-full divide-y divide-gray-200">
                                                <thead class="bg-orange-600">
                                                    <tr>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Name
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            NIK
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            Email
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                                                            
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white" v-for="(item, index) in selectedteams" :key="index">
                                                    <tr>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            {{ item.name }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            {{ item.nik }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            {{ item.email }}
                                                        </td>
                                                        <td
                                                            class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            <button @click="selectedteams.splice(index,1)"
                                                                class=" ml-auto focus:outline-none hover:bg-gray-300 p-3 rounded-md">
                                                                <svg class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24">
                                                                    <path class="pointer-events-none"
                                                                        d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                            <div class="flex flex-col-reverse  xl:gap-10 w-full">
                                                <div class="mb-2">
                                                    <label for="confirm_password"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">signature <span class="text-xs text-red-500">*</span></label>
                                                        <div class="shadow-md md:m-4 border-2 relative md:w-[400px] w-full h-[500px] p-3">
                                                            <button @click="undo"
                                                                class=" ml-auto focus:outline-none hover:bg-gray-300 p-3 rounded-md">
                                                                <svg class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24">
                                                                    <path class="pointer-events-none"
                                                                        d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                                </svg>
                                                            </button>
                                                            <div class="absolute">
                                                                <VueSignaturePad width="400px" height="400px" ref="signaturePad" />
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="mb-2 w-full">
                                                    <div v-if="mydata['reason'] === 'Installation'">
                                                        <div class="flex justify-between w-full">
                                                            <label for="instalisasi"
                                                                class="block text-md font-medium text-gray-900 dark:text-gray-300 my-5">Installation Data <span class="text-xs text-red-500">*</span></label>
                                                            <button class="bg-orange-600 p-2 m-2 rounded-md text-sm text-white" @click="modalreason()">Add Server</button>
                                                        </div>
                                                        <table class=" w-full divide-y divide-gray-200 overflow-auto text-[10px] md:text-xs">
                                                            <thead class="bg-orange-600">
                                                                <tr>
                                                                    <th scope="col"
                                                                        class="p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                        Server
                                                                    </th>
                                                                    <th scope="col"
                                                                        class="p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                        Merek & type
                                                                    </th>
                                                                    <th scope="col"
                                                                        class="p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                        Category
                                                                    </th>
                                                                    <th scope="col"
                                                                        class="p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                        SN
                                                                    </th>
                                                                    <th scope="col"
                                                                        class="p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                        Size
                                                                    </th>
                                                                    <th scope="col"
                                                                        class="p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                        PSU
                                                                    </th>
                                                                    <th scope="col"
                                                                        class="p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                        Railkit
                                                                    </th>
                                                                    <th scope="col"
                                                                        class="p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="bg-white" v-for="(item, index) in serverdata" :key="index">
                                                                <tr >
                                                                    <td
                                                                        class="p-4 whitespace-nowrap font-normal text-gray-900 break-all">
                                                                        {{ item.productid.split('/')[1] }}
                                                                    </td>
                                                                    <td
                                                                        class="p-4 whitespace-nowrap font-normal text-gray-900 break-all">
                                                                        {{ item.merek }}
                                                                    </td>
                                                                    <td
                                                                        class="p-4 whitespace-nowrap font-normal text-gray-900 break-all">
                                                                        {{ item.category }}
                                                                    </td>
                                                                    <td
                                                                        class="p-4 whitespace-nowrap font-semibold text-gray-900 break-all">
                                                                        {{ item.sn }}
                                                                    </td>
                                                                    <td
                                                                        class="p-4 whitespace-nowrap font-semibold text-gray-900 break-all">
                                                                        {{ item.ukuran }}
                                                                    </td>
                                                                    <td
                                                                        class="p-4 whitespace-nowrap font-semibold text-gray-900 break-all">
                                                                        {{ item.psu }}
                                                                    </td>
                                                                    <td
                                                                        class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900 break-all">
                                                                        {{ item.railkit }}
                                                                    </td>
                                                                    <td
                                                                        class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                        <button @click="deleteserver(index, 'install')"
                                                                            class=" ml-auto focus:outline-none hover:bg-gray-300 p-3 rounded-md">
                                                                            <svg class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24">
                                                                                <path class="pointer-events-none"
                                                                                    d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="mt-5" v-if="mydata['reason'] === 'Maintenance' || mydata['reason'] === 'Unloading'">
                                                        <label for="instalisasi"
                                                        class="block text-md font-medium text-gray-900 dark:text-gray-300 mb-5">{{ mydata['reason'] === 'Maintenance' ? "Maintenance Server" : "Unloading Server"}}</label>
                                                        <div class="flex mb-2">
                                                            <div>
                                                                <div class="w-80 md:w-72">
                                                                    <model-select
                                                                        ref="select"                                                     
                                                                        :options="server"
                                                                        style="width: 100%;"
                                                                        v-model="serveritem"
                                                                        placeholder="Choose Server">
                                                                    </model-select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="overflow-x-auto rounded-lg">
                                                            <div class="align-middle inline-block min-w-full">
                                                                <div class="shadow overflow-hidden sm:rounded-lg">
                                                                    <table class="min-w-full divide-y divide-gray-200 text-xs">
                                                                        <thead class="bg-orange-600">
                                                                            <tr>
                                                                                <th scope="col-"
                                                                                    class="p-2 md:p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                                    Server
                                                                                </th>
                                                                                <th scope="col"
                                                                                    class="p-2 md:p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                                    Merek & type
                                                                                </th>
                                                                                <th scope="col"
                                                                                    class="p-2 md:p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                                    Category
                                                                                </th>
                                                                                <th scope="col"
                                                                                    class="p-2 md:p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                                    SN
                                                                                </th>
                                                                                <th scope="col"
                                                                                    class="p-2 md:p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                                    Size
                                                                                </th>
                                                                                <th scope="col"
                                                                                    class="p-2 md:p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                                    PSU
                                                                                </th>
                                                                                <th scope="col"
                                                                                    class="p-2 md:p-4 text-left font-medium text-white uppercase tracking-wider">
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody class="bg-white" v-for="(item, index) in maintenancedata" :key="index">
                                                                            <tr >
                                                                                <td
                                                                                    class="p-4 whitespace-nowrap font-normal text-gray-900 break-all">
                                                                                    {{ item.domain }}
                                                                                </td>
                                                                                <td
                                                                                    class="p-4 whitespace-nowrap font-normal text-gray-900 break-all">
                                                                                    {{ item.merek }}
                                                                                </td>
                                                                                <td
                                                                                    class="p-4 whitespace-nowrap font-normal text-gray-900 break-all">
                                                                                    {{ item.jenis_server }}
                                                                                </td>
                                                                                <td
                                                                                    class="p-4 whitespace-nowrap font-semibold text-gray-900 break-all">
                                                                                    {{ item.SN }}
                                                                                </td>
                                                                                <td
                                                                                    class="p-4 whitespace-nowrap font-semibold text-gray-900 break-all">
                                                                                    {{ item.ukuran }}
                                                                                </td>
                                                                                <td
                                                                                    class="p-4 whitespace-nowrap font-semibold text-gray-900 break-all">
                                                                                    {{ item.psu }}
                                                                                </td>
                                                                                <td
                                                                                    class="p-4 whitespace-nowrap text-xs font-semibold text-gray-900">
                                                                                    <button @click="deleteserver(index, 'maintenance')"
                                                                                        class=" ml-auto focus:outline-none hover:bg-gray-300 p-3 rounded-md">
                                                                                        <svg class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            width="24" height="24"
                                                                                            viewBox="0 0 24 24">
                                                                                            <path class="pointer-events-none"
                                                                                                d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                                                        </svg>
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                            </div></div>
                                                        </div>
                                                    </div>
                                                    <div class="mt-5" v-if="mydata['reason'] === 'Maintenance'">
                                                        <label for="keterangan"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keterangan <span class="text-xs text-red-500">*</span></label>
                                                        <input name="keterangan" id="keterangan" type="text"
                                                            v-model="mydata.keterangan"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                            placeholder="Keterangan Maintenace">
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <button @click="savedata()" :disabled="issave" :class="issave ? 'hover:cursor-not-allowed' : ''" type="submit"
                                                class=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                                <div class="flex items-center justify-center">
                                                    <div v-show="issave" class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                                                    <div class="ml-2"> {{ txtsave }} <div>
                                                </div></div></div>
                                            </button>
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
    import baseLy from './baseLayout.vue';
    import { v4 as uuidv4 } from 'uuid';
    import { VueFinalModal } from 'vue-final-modal';
    import { ModelSelect } from "vue-search-select"
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import AddTeams from '../components/addTeams.vue';
    import { z } from 'zod';
    import moment from 'moment'
    
    export default {
        name : 'add_visitDc',
        components: { baseLy ,VueFinalModal , ModelSelect, VueDatePicker, AddTeams },
        data() {
            return {
                reasonmodal: false,
                stream: null,
                upload: null,
                url: import.meta.env.VITE_APIBASE,
                userId: this.$storage.getStorageSync("user_id"),
                file: [],
                teams: [],
                filterTeams: [],
                selectedteams: [],
                mydata: {},
                txtsave: 'Save Data',
                issave: false,
                myproduct: [],
                serverdata: [],
                tempdata: {},
                maintenancedata: [],
                server: [],
                serveritem: '',
                serverId: [],
                teamitem: [],
                formSchema: null,
                errors: {},
                pendingServer : []
            };
        },
        created() {
            this.formSchema = z.object({
                name: z.string().min(2, { message : "Fullname tidak boleh kosong dan minimal 2 karakter"}),
                email: z.string().email({ message : "Email tidak valid"}),
                phone: z.string().min(2, { message : "Phone tidak boleh kosong dan minimal 2 karakter"}),
                nik: z.string().min(2, { message : "NIK tidak boleh kosong dan minimal 2 karakter"}),
                company: z.string().min(2, { message : "Company tidak boleh kosong dan minimal 2 karakter"}),
                date: z.string().min(2, { message : "Date tidak boleh kosong dan minimal 2 karakter"}),
                data_center: z.string().min(2, { message : "Data Center tidak boleh kosong dan minimal 2 karakter"}),
                reason: z.string().min(2, { message : "Reason tidak boleh kosong dan minimal 2 karakter"}),
                filektp: z.string().min(2, { message : "KTP tidak boleh kosong"}),
            });
        },
        mounted() {
            axios.get(this.url + 'getUser/' + this.userId).then(({data}) => {
                this.mydata = data.data
                this.file[0] = { data: this.mydata.ktp, name: this.mydata.name }
                this.mydata.filektp =this.mydata.ktp
            })
            this.getproduct()
            this.getteams()
        },
        watch : {
            serveritem(newValue, oldValue){
                console.log(newValue)
                this.addmaintenace(newValue)
            },
            teamitem(newValue, oldValue){
            this.addtteams(newValue['value'])
            //    this.teamitem = []
            }
        },
        methods: {
            includeme(){
                this.selectedteams.push(this.mydata)
            },
            modalreason(){
                this.reasonmodal = true
            },
            addmaintenace(data){
                let temp = data
                axios.get(this.url + 'produk/detail/produkid/'+temp.split('/')[0]).then(({data}) => {
                    let tempdata = data.data
                    if(tempdata.length > 0){
                        tempdata[0]['domain'] = temp.split('/')[1]
                        this.maintenancedata.push(tempdata[0])
                        this.serverId.push(temp.split('/')[0])
                        this.serveritem = ''
                    }

                })
            },
            getproduct(){
                axios.get(this.url+'product?limit=all&id='+this.userId).then(({data})=>{
                    let datas = data.data;
                    this.server = datas.map((item) => {
                        return {
                            value: item.id + '/' + item.productName + ' — ' + item.domain,
                            text: item.productName + ' — ' + item.domain
                        };
                    });
                    this.pendingServer = datas.filter((item) => {
                        return item.status === "Pending";
                    }).map((item) => {
                        return {
                            value: item.id + '/' + item.productName + ' — ' + item.domain,
                            text: item.productName + ' — ' + item.domain
                        };
                    });
                    // this.myproduct = datas
                })
            },
            async savedata(){
                if(this.validate()){
                    this.issave = true;
                    this.txtsave = "Processing..";
                    switch (this.mydata.reason) {
                        case "Installation":
                            this.mydata.server_maintenance = "install"
                            break;
                        case "visit DC":
                            this.mydata.server_maintenance = "visit"
                            break;
                        case "Maintenance":
                            this.mydata.server_maintenance = JSON.stringify(this.maintenancedata)
                            break;
                        case "Unloading":
                            this.mydata.server_maintenance = JSON.stringify(this.maintenancedata)
                            break;
                    }
                    try {
                        const response = await axios.post(this.url + 'visitdc', this.prepareData()).then(({data})=>{
                            if (data.status) {
                                this.$notify({
                                    title: 'Berhasil',
                                    text: data.message,
                                    type: 'success',
                                    duration: 5000, // Durasi notifikasi dalam milidetik
                                });
                                return this.$router.push('/request');
                            }else{
                                return this.$notify({
                                    title: 'Gagal',
                                    text: data.message,
                                    type: 'error',
                                    duration: 5000, // Durasi notifikasi dalam milidetik
                                });
                            }
                        });
                        // this.success();
                        this.issave = false;
                        this.txtsave = "Save";
                        return true
                    } catch (error) {
                        this.$notify({
                                    title: 'Gagal',
                                    text: "Silahkan coba lagi",
                                    type: 'error',
                                    duration: 5000, // Durasi notifikasi dalam milidetik
                                });
                    }
                    return true
                }
                this.$notify({
                    title: 'Periksa Inputan',
                    text: "silahkan periksa kembali inputan",
                    type: 'warning',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
                
            },
            success(){
                this.issave = false;
                this.txtsave = "Success Save";
            },
            prepareData(){
                // init signature result
                const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
                // convert teams selected to array
                let teams = [];
                    this.selectedteams.forEach(element => {
                        teams.push(element.name)
                    });


                let datas = {
                    UID             : uuidv4(),
                    id_user         : this.userId,
                    lead_name       : this.mydata.name,
                    lead_email      : this.mydata.email,
                    lead_phone      : this.mydata.phone,
                    lead_nik        : this.mydata.nik,
                    lead_ktp        : this.mydata.filektp,
                    lead_signature  : data,
                    company_name    : this.mydata.company,
                    Date            : moment(this.mydata.date).format('DD MMM YYYY HH:mm'),
                    data_center     : this.mydata.data_center,
                    reason          : this.mydata.reason,
                    keterangan      : this.mydata.keterangan,
                    dataserver      : this.serverdata,
                    serverId        : this.serverId.toString(),
                    server_maintenance : this.mydata.server_maintenance,
                    teams           : JSON.stringify(teams),
                    file_surat      : ''

                }
                return datas;
            },
            addserver(){
                this.serverdata.push(this.tempdata)
                this.serverId.push(this.tempdata['productid'].split('/')[0])
                this.tempdata = {}
                this.reasonmodal = false
                // if(!this.validate('add-server')){
                //     this.serverdata.push(this.tempdata)
                //     this.serverId.push(this.tempdata['productid'].split('/')[0])
                //     this.tempdata = {}
                //     this.reasonmodal = false
                // }
                // this.$notify({
                //     title: 'Periksa Inputan',
                //     text: "silahkan periksa kembali inputan",
                //     type: 'warning',
                //     duration: 5000, // Durasi notifikasi dalam milidetik
                // });
            },
            deleteserver(pos, type){
                switch (type) {
                    case "install":
                        this.serverdata.splice(pos,1)
                        break;
                    case "maintenance":
                        this.maintenancedata.splice(pos,1)
                        break;
                
                    default:
                        break;
                }
                this.serverId.splice(pos,1)
            },
            optionDataserver(event,key){
                this.tempdata[key] = event.target.value;
            },
            optionData(event,key){
                this.mydata[key] = event.target.value;
            },
            addtteams(item){
                this.selectedteams.push(item)
            },
            getteams(){
                this.teams = []
                axios.get(this.url + 'teams/'+this.userId).then(({data}) => {
                    let temp = data.datas;
                    for (const key in temp) {
                        this.teams.push({ value : temp[key], text : temp[key]['name']})
                    }
                })
            },
            onFilePicked(){
                this.upload = this.$refs.file.files[0]
                this.file = [];
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.mydata.filektp = fileReader.result;
                    this.file.push({ data: fileReader.result, name: this.upload.name })
                })
                fileReader.readAsDataURL(this.upload)
            },
            undo() {
                this.$refs.signaturePad.undoSignature();
            },
            validate(){
                try {
                    this.formSchema.parse(this.mydata);
                    return true;
                } catch (error) {
                    this.errors = error.formErrors.fieldErrors;
                    console.log(this.errors)
                    return false
                }
            },
        },
    }
</script>