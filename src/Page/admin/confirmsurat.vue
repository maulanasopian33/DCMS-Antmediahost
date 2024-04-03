<template>
    <div>
        <baseLy>
            <main>
                <vue-final-modal v-model="ttdmodal" >
                    <div class="flex justify-center items-center h-screen">
                        <div class="bg-white w-[370px] m-5 h-fit p-5 rounded-md shadow-md overflow-y-auto">
                            <div class="mb-2">
                                <label for="confirm_password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">signature</label>
                                    <div class="shadow-md md:m-4 border-2 relative h-[350px] p-3">
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
                                            <VueSignaturePad width="250px" height="250px" ref="signaturePad" />
                                        </div>
                                    </div>
                            </div>
                            
                            <div class="flex mt-5 gap-2 pl-5">
                                <button @click="ttdsave()" class="bg-orange-600 rounded-md text-white py-2 px-4">Save</button>
                                <button @click="ttdmodal = false">Close</button>
                            </div>
                        </div>
                    </div>
                    
                </vue-final-modal>
                <vue-final-modal v-model="editproduct">
                    <div class="flex justify-center items-center h-screen">
                        <div class="bg-white w-fit m-5 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                            <h3 class="text-2xl mb-4">Edit Data Server</h3>
                            <div class="mb-5">
                                <div>
                                    <label for="modaljenis"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jenis Perangkat</label>
                                    <input v-model="modal.jenis" type="text" id="modaljenis"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                        placeholder="Jenis Perangkat" required>
                                </div>
                                <div>
                                    <label for="modaldeskripsi"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Deskripsi</label>
                                    <input v-model="modal.deskripsi" type="text" id="modaldeskripsi"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                        placeholder="Deskripsi" required>
                                </div>
                                <div>
                                    <label for="sn"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">SN</label>
                                    <input v-model="modal.sn" type="text" id="sn"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                        placeholder="Serial Number" required>
                                </div>
                            </div>
                            <div class="inline">
                                <button v-show="!addnew" @click="updateproduk(modal.id)" class="bg-orange-600 text-white py-3 px-10 rounded-md">Update</button>
                                <button @click="editPrdk()" class="bg-blue-600 text-white py-3 px-10 rounded-md ml-2">Cancel</button>
                            </div>
                        </div>
                    </div>

                </vue-final-modal>
                <div class="pt-6 px-4">
                    <div class="w-full gap-4">
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Generate Surat</h3>
                                    <span class="text-base font-normal text-gray-500">This is a list of history visit dc</span>
                                </div>
                            </div>
                            <div class="flex flex-col mt-8">
                                <div class="overflow-x-auto rounded-lg">
                                    <div class="align-middle inline-block w-full">
                                        <div class="shadow overflow-hidden sm:rounded-lg">
                                            <label for="full_name"
                                                    class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Personal Detail</label>
                                            <div class="grid gap-4 mb-4 md:grid-cols-2">
                                                <div>
                                                    <label for="full_name"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full
                                                        Name <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.name"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Name" id="full_name" required>
                                                        <span id="error-full_name" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="email"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email <span class="text-xs text-red-500">*</span></label>
                                                    <input type="email" v-model="mydata.email" id="email"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Email" required>
                                                        <span id="error-email" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="phone"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                                                        Number <span class="text-xs text-red-500">*</span></label>
                                                    <input type="tel" v-model="mydata.phone" id="phone"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="(62) 123-456-789"
                                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                                                        <span id="error-phone" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="nik"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NIK <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.nik" id="nik"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="NIK" required>
                                                        <span id="error-nik" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="address"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.address"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Your Address" id="address" required>
                                                        <span id="error-address" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="position"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Position <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.position"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Position" id="position" required>
                                                        <span id="error-position" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                            </div>
                                            <label
                                                    class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Company Detail</label>
                                            <div class="grid gap-4 mb-6 md:grid-cols-2">
                                                <div>
                                                    <label for="company"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company
                                                        Name <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.company"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Company Name" id="company" required>
                                                    <span id="error-company" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="npwp"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NPWP <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.npwp" id="npwp"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="NPWP">
                                                </div>
                                                <div>
                                                    <label for="companyphone"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Phone Number <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.companyphone"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Company Phone Number" id="companyphone" required>
                                                        <span id="error-companyphone" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="addresscompany"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.address2" id="addresscompany"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Company Address" required>
                                                    <span id="error-addresscompany" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                            </div>
                                            <label
                                                    class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Installation Detail</label>
                                            <div class="grid gap-4 mb-6 md:grid-cols-2">
                                                <div>
                                                    <label for="nosurat"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">No Surat <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.nosurat"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="No Surat" id="nosurat" required>
                                                        <span id="error-nosurat" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="datacenter"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Data Center <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.data_center" id="datacenter"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Datacenter" required>
                                                        <span id="error-datacenter" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="rack"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        No Rack Server <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.rack"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="No Rack Server" id="rack" required>
                                                        <span id="error-rack" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="switch"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Switch <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.switch" id="switch"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Switch" required>
                                                    <span id="error-switch" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="port"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">No Port <span class="text-xs text-red-500">*</span></label>
                                                    <input type="text" v-model="mydata.port" id="port"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="No Port" required>
                                                    <span id="error-port" class="text-xs text-red-600" hidden>error</span>
                                                </div>
                                                <div>
                                                    <label for="Service"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service</label>
                                                    <input type="text" v-model="mydata.productName" id="service"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="service">
                                                </div>
                                                <div>
                                                    <label for="waktu_layanan"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Waktu Layanan</label>
                                                    <input type="text" v-model="mydata.waktulayanan" id="waktu_layanan"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Waktu Layanan">
                                                    
                                                </div>
                                                <div>
                                                    <label for="systemoperasi"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">System Operasi</label>
                                                    <input type="text" v-model="mydata.os" id="os"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="System Operasi">
                                                    
                                                </div>
                                                <div>
                                                    <label for="arsitektur"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Arsitektur</label>
                                                    <input type="text" v-model="mydata.arsitektur" id="arsitektur"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Arsitektur">
                                                </div>
                                                <div>
                                                    <label for="controlpanel"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Control Panel</label>
                                                    <input type="text" v-model="mydata.controlPanel" id="controlpanel"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                                        placeholder="Control Panel">
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
                                                                            NO
                                                                        </th>
                                                                        <th scope="col"
                                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                                            Jenis Perangkat
                                                                        </th>
                                                                        <th scope="col"
                                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                                            Deskripsi
                                                                        </th>
                                                                        <th scope="col"
                                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                                            No Seri
                                                                        </th>
                                                                        <th scope="col"
                                                                            class="p-4 text-left text-xs font-medium text-white uppercase">
                                                                            
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="bg-white" v-for="(item, index) in mydata.productdetail" :key="index">
                                                                    <tr>
                                                                        <td
                                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                            {{ index+1 }}
                                                                        </td>
                                                                        <td
                                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                            {{ item.ukuran }}
                                                                        </td>
                                                                        <td
                                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                            {{ item.merek }}
                                                                        </td>
                                                                        <td
                                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                            {{ item.SN }}
                                                                        </td>
                                                                        <td
                                                                            class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 text-end">
                                                                            <span @click="editPrdk(index)" class="bg-orange-500 p-2 rounded-md text-white cursor-pointer"><i class="fa fa-pencil"></i></span>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">File KTP</label>
                                            <div class="flex flex-wrap gap-2" v-for="(item, index) in mydata['ktp']" :key="index">
                                                <img :src="item.img"
                                                alt="ktp preview"
                                                    class="img-preview w-20 h-20 md:w-40 md:h-40 sticky object-cover rounded-md bg-fixed" />
                                            </div>

                                            <label class="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dokumentasi</label>
                                            <div class="md:flex">
                                                <div class="bg-grey-lighter mb-5 mr-5">
                                                    <label
                                                        class="w-full md:w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg uppercase border-2 border-dashed border-gray-500 cursor-pointer hover:bg-blue-500 hover:text-white">
                                                        <svg class="w-8 h-8" fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path
                                                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                                        </svg>
                                                        <span class="mt-2 text-sm md:text-base leading-normal">Select a file</span>
                                                        <input @change="onFilePicked()" ref="file" type='file' class="hidden" id="file" />
                                                    </label>
                                                </div>
                                                <div class="flex flex-wrap gap-2 bg-grey-lighter mb-5 relative">
                                                    <article v-for="(item, index) in file" :key="index" tabindex="0"
                                                        class="group w-20 h-20 md:w-[120px] md:h-[120px] rounded-md focus:outline-none focus:shadow-outline bg-gray-300 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                                        <img :src="item.data"
                                                            alt="upload preview"
                                                            class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                                                        <section
                                                            class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                                            <h1 class="flex-1">{{ item.name }}</h1>
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
                                                                <button @click="deleteimg(index)"
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
                                            <label class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Signature</label>
                                            <div class="grid grid-cols-2 gap-2 mb-6">
                                                <div class="mb-2">
                                                    <label for="signature_tim"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">tim signature</label>
                                                    <div @click="modalttd('tim')" class="w-[80%] cursor-pointer h-20 md:w-[80%] md:h-56 border-[1px] border-gray-200 flex items-center justify-center rounded-md">
                                                        <i v-show="timsignature === ''" class="fa fa-file-signature text-3xl"></i>
                                                        <img v-show="timsignature !== ''" class="w-[60%] h-[80%] sticky object-contain rounded-md bg-fixed" :src="timsignature">
                                                    </div>
                                                </div>
                                                <div class="mb-2">
                                                    <label for="signature_client"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">client signature</label>
                                                        <div @click="modalttd('client')" class="w-[80%] h-20 md:w-[80%] md:h-56 border-[1px] border-gray-200 flex items-center justify-center rounded-md">
                                                            <i v-show="clientsignature === ''" class="fa fa-file-signature text-3xl"></i>
                                                            <img v-show="clientsignature !== ''" class="w-[60%] h-[80%] sticky object-contain rounded-md bg-fixed" :src="clientsignature">
                                                        </div>
                                                </div>
                                            </div>
                                            <button v-show="!update" @click="savedata()" :disabled="issave" :class="issave ? 'hover:cursor-not-allowed' : ''" type="submit"
                                                class=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                                <div class="flex items-center justify-center">
                                                    <div v-show="issave" class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                                                    <div class="ml-2"> {{ txtsave }} <div>
                                                </div></div></div>
                                            </button>
                                            <button v-show="update" @click="updatedata()" type="submit"
                                                class=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                                <div class="flex items-center justify-center">
                                                    <div v-show="issave" class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                                                    <div class="ml-2">update<div>
                                                </div></div></div>
                                            </button>
                                            <button :disabled="!update" :class="!update ? 'bg-orange-200 cursor-not-allowed' :'bg-orange-700 hover:bg-orange-800'" @click="generatesurat()" type="submit"
                                                class=" text-white md:ml-2 mt-2  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center ">
                                                Generate Surat
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
    import baseLy from './baseLayoutAdmin.vue';
    import { v4 as uuidv4 } from 'uuid';
    import { VueFinalModal } from 'vue-final-modal';
export default {
    name : 'confirmsurat',
    components: { baseLy ,VueFinalModal},
    data() {
    return {
        ttdmodal          : false,
        videoElement      : null,
        stream            : null,
        upload            : null,
        filektp           : '',
        update            : false,
        url               : import.meta.env.VITE_APIBASE,
        urlapi            : import.meta.env.VITE_API,
        userId            : this.$storage.getStorageSync("userId"),
        uuid              : this.decode(this.$route.params.id),
        file              : [],
        teams             : [],
        filterTeams       : [],
        selectedteams     : [],
        mydata            : [],
        txtsave           : 'Save Data',
        issave            : false,
        myproduct         : [],
        serverdata        : [],
        tempdata          : {},
        maintenancedata   : [],
        server            : [],
        serveritem        : '',
        teamitem          : [],
        lang              : {},
        possignature      : '',
        timsignature      : '',
        clientsignature   : '',
        token             : this.$storage.getStorageSync("token"),
        visitdc           : '',
        loader            : null,
        editproduct       : false,
        modal             : {},
        reason            : ''
    };
  },
  mounted() {
    this.fetchLanguageData()
    this.getdata();
},
methods: {
    async generatesurat(){
        this.loader = this.$loading.show({container: null,canCancel: false,});
        let key = encodeURIComponent(btoa(this.mydata['nosurat']))
        let data = ""
        if(this.reason === "Installation"){
            data = await this.apipost('admin/surat/i/'+ key,this.token,[],this);
            if(data['status']){
                this.$notify({
                    title: 'Berhasil',
                    text: data.message,
                    type: 'success',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
            this.$router.push('/admin/surat')
            this.loader.hide()
            }
            
        }else{
            data = await this.apipost('admin/surat/unloading/'+ key,this.token,[],this);
            if(data['status']){
                this.$notify({
                    title: 'Berhasil',
                    text: data.message,
                    type: 'success',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
            this.$router.push('/admin/surat')
            this.loader.hide()
            }
        }
    },
    async getdatasurat(){
        let data = await this.apiget('admin/surat/'+ this.uuid,this.token,this);
        console.log(data.data.length)
        if(data.data.length){
            this.update                     = true
            this.mydata['id']               = data.data[0].id
            this.mydata['position']         = data.data[0].position
            this.mydata['companyphone']     = data.data[0].phone_number
            this.mydata['nosurat']          = data.data[0].no_surat
            this.mydata['os']               = data.data[0].os
            this.mydata['rack']             = data.data[0].no_rack
            this.mydata['productName']      = data.data[0].service
            this.mydata['switch']           = data.data[0].switch
            this.mydata['waktu_layanan']    = data.data[0].waktu_layanan
            this.mydata['port']             = data.data[0].port
            this.mydata['controlPanel']     = data.data[0].control_panel
            this.mydata['arsitektur']       = data.data[0].arsitektur
            this.mydata['dokumentasi']      = JSON.parse(data.data[0].dokumentasi)
            this.mydata['tim_signature']    = this.urlapi + 'storage/'+ data.data[0].support_signature
            this.mydata['client_signature'] = this.urlapi + 'storage/'+ data.data[0].client_signature
            this.timsignature               = this.urlapi + 'storage/'+ data.data[0].support_signature
            this.clientsignature            = this.urlapi + 'storage/'+ data.data[0].client_signature
            console.log('update',this.mydata)
            for (const key in this.mydata['dokumentasi']) {
                this.file.push({ data: this.urlapi +"storage/"+ this.mydata['dokumentasi'][key], name: '' })
            }
            let tempktp =  JSON.parse(data.data[0].ktp)
            this.mydata['ktp'] = []
            
            for (const key in tempktp) {
                this.mydata['ktp'].push({ img: this.urlapi +"storage/"+ tempktp[key], name: '' })
            }
        }else{
            this.update = false
        }
    },
    async updatedata(){
        this.loader = this.$loading.show({container: null,canCancel: false,});
        this.mydata['dokumentasi'] = this.file
        let data = await this.apiput('admin/surat/update',this.token,this.mydata,this);
        if(data['status']){
            this.$notify({
                title: 'Berhasil',
                text: data.message,
                type: 'success',
                duration: 5000, // Durasi notifikasi dalam milidetik
            });
            location.reload();
            this.issave = false;
        }
        this.loader.hide()
    },
    editPrdk(i){
        this.editproduct = !this.editproduct;
        if (this.editproduct) {
            this.modal = {
                "jenis"     :this.mydata.productdetail[i]["ukuran"],
                "deskripsi" :this.mydata.productdetail[i]["merek"],
                "sn"        :this.mydata.productdetail[i]["SN"],
                "id"        :i
            }
        }
    },
    updateproduk(i){
        this.mydata.productdetail[i]["ukuran"]    = this.modal["jenis"]
        this.mydata.productdetail[i]["merek"]     = this.modal["deskripsi"]
        this.mydata.productdetail[i]["SN"]        = this.modal["sn"]
        this.updateproductdetail(this.mydata.productdetail[i]["id"])
        this.editPrdk(i)

    },
    async updateproductdetail(id){
        let tempdata = {
            "jenis"     : this.modal.jenis,
            "deskripsi" : this.modal.deskripsi,
            "sn"        : this.modal.sn
        }
        let data = await this.apiput('admin/productdetail/'+ id,this.token,tempdata,this);
    },
    async getdata(){
        this.loader = this.$loading.show({container: null,canCancel: false,});
        let data = await this.apiget('admin/visitdc/'+ this.uuid,this.token,this);
        let tempdata = data.data;
        this.mydata = {
            "name"          : tempdata[0]['lead_name'],
            "uid"           : tempdata[0]['UID'],
            "email"         : tempdata[0]['lead_email'],
            "phone"         : tempdata[0]['lead_phone'],
            "nik"           : tempdata[0]['lead_nik'],
            "address"       : tempdata[0]['users']['address'],
            "position"      : tempdata[0]['users']['position'],
            "company"       : tempdata[0]['company_name'],
            "npwp"          : tempdata[0]['users']['no_npwp'],
            "companyphone"  : tempdata[0]['users']['company_phone'],
            "address2"      : tempdata[0]['users']['company_address'],
            "data_center"   : tempdata[0]['data_center'],
            "productName"   : tempdata[0]['productName'],
            "supportID"     : this.userId,
            "productId"     : tempdata[0]['productId'],
            "productdetail" : tempdata[0]['product'][0]['productdetail']
        }
        this.reason = tempdata[0]['reason'];
        this.mydata['ktp'] = [];
        this.getdatasurat();
        this.ktpfetch(tempdata[0]['lead_ktp'])
        this.loader.hide()
    },
    ktpfetch(data){
        return this.mydata['ktp'].push({"img" : data})
    },
    async savedata(){
        this.loader = this.$loading.show({container: null,canCancel: false,});
        if(!this.validate()){
            this.mydata['dokumentasi'] = this.file
            this.mydata['service'] = this.mydata['service'] || 'Colocation'
            this.mydata['waktu_layanan'] = this.mydata['waktu_layanan'] || '-'
            this.mydata['arsitektur'] = this.mydata['arsitektur'] || '-'
            this.mydata['controlPanel'] = this.mydata['controlPanel'] || '-'
            this.mydata['os'] = this.mydata['os'] || '-'
            let data = await this.apipost('admin/surat',this.token,this.mydata,this);
            if(data['status']){
                this.$notify({
                    title: 'Berhasil',
                    text: data.message,
                    type: 'success',
                    duration: 5000, // Durasi notifikasi dalam milidetik
                });
                location.reload();
            }
            this.loader.hide()
        }
        this.$notify({
            title: 'Periksa Inputan',
            text: "silahkan periksa kembali inputan",
            type: 'warning',
            duration: 5000, // Durasi notifikasi dalam milidetik
        });
    },
    modalttd(pos){
        this.ttdmodal = true
        this.possignature = pos
    },
    ttdsave(){
        const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
        switch (this.possignature) {
            case 'tim':
                this.timsignature = data,
                this.mydata['tim_signature'] = data
                break;
            case 'client':
                this.clientsignature = data
                this.mydata['client_signature'] = data
                break;
        
            default:
                break;
        }
        this.ttdmodal = false
    },
    onFilePicked(){
        this.upload = this.$refs.file.files[0]
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
            this.file.push({ data: fileReader.result, name: this.upload.name })
        })
        fileReader.readAsDataURL(this.upload)
    },
    deleteimg(pos){
        this.file.splice(pos,1)
    },
    undo() {
      this.$refs.signaturePad.clearSignature();
    },
    validate(){
        let element = document.querySelectorAll('input, select')
        let invalid = false;
        element.forEach(element => {
            if(element.id === 'mobile-search' && (element.id === '' || element.id === null)){
                return true;
            }
            if(element.required){
                let error = document.getElementById('error-'+element.id)
                if((element.type).toLowerCase() === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.value)){
                    error.hidden =false
                    error.innerText = "input harus email"
                    invalid = true
                    return true;
                }
                if (element.value === '' || element.value === '#') {
                    error.hidden =false
                    error.innerText = "Tidak boleh kosong"
                    invalid = true
                    return true;
                }
                if((element.type).toLowerCase() === 'number' && isNaN(parseFloat(element.value))){
                    error.hidden =false
                    error.innerText = "input harus number"
                    invalid = true
                    return true;
                }
                if (error == null) {
                    return true;
                }
                error.hidden =true
            }
        });
        return invalid;
    },
  },
}
</script>