<template>
    <div>
        <vue-final-modal v-model="showModal">
                <div class="flex justify-center items-center h-screen">
                    <div class="bg-white w-fit m-5 md:m-32 h-fit p-10 rounded-md shadow-md max-h-[90%] overflow-y-auto">
                        <h3 class="text-2xl mb-4">{{ this.titlemodal }}</h3>
                        <div class="grid gap-6 mb-6 lg:grid-cols-2">
                            <div>
                                <label for="full_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full
                                    Name <span class="text-xs text-red-500">*</span></label>
                                <input v-model="form.fullname" type="text" id="full_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="Name" required>
                                    <span v-if="errors.fullname" class="text-xs text-red-600">{{ errors.fullname[0] }}</span>
                            </div>
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email <span class="text-xs text-red-500">*</span></label>
                                <input v-model="form.email" type="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="Email" required>
                                <span v-if="errors.email" class="text-xs text-red-600">{{ errors.email[0] }}</span>
                            </div>
                            <div>
                                <label for="phone"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                                    Number <span class="text-xs text-red-500">*</span></label>
                                <input v-model="form.phone" type="number" id="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="(62) 123-456-789" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                                <span v-if="errors.phone" class="text-xs text-red-600">{{ errors.phone[0] }}</span>
                            </div>
                            <div>
                                <label for="nik"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NIK <span class="text-xs text-red-500">*</span></label>
                                <input v-model="form.nik" type="number" id="nik"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                    placeholder="NIK" required>
                                <span v-if="errors.nik" class="text-xs text-red-600">{{ errors.nik[0] }}</span>
                            </div>
                        </div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">File KTP <span class="text-xs text-red-500">*</span></label>
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
                                            <span class="p-1">
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
                        <div class="inline">
                            <button v-show="addnew" @click="savedata()" class="bg-orange-600 text-white py-3 px-10 rounded-md">Save</button>
                            <button @click="showModal = false" class="bg-blue-600 text-white py-3 px-10 rounded-md ml-2">Cancel</button>
                        </div>
                        <p class="pt-2 text-xs text-gray-400" v-show="!addnew">{{ uuidteams }}</p>
                    </div>
                </div>

            </vue-final-modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import { v4 as uuidv4 } from 'uuid';
    import { VueFinalModal } from 'vue-final-modal';
    import { z } from 'zod';
export default {
    name : 'addTeams',
    components: {
            VueFinalModal,
        },
        data() {
            return {
                showModal   : false,
                titlemodal  : 'Add Teams',
                addnew      : true,
                fullname    : '',
                nik         : '',
                phone       : '',
                email       : '',
                url         : import.meta.env.VITE_APIBASE,
                userId      : this.$storage.getStorageSync("user_id"),
                teams       : '',
                filektp     : '',
                file        : [],
                uuidteams   : '',
                loader      : null,
                userSchema : null,
                form: {
                    fullname: '',
                    email: '',
                    phone: '',
                    nik : '',
                    filektp : '',
                },
                errors : {}
            }
        },
        created() {
            this.userSchema = z.object({
                fullname: z.string().min(2, { message : "Fullname tidak boleh kosong dan minimal 2 karakter"}),
                email: z.string().email({ message : "Email tidak valid"}),
                phone: z.number().min(2, { message : "Phone tidak boleh kosong dan minimal 2 karakter"}),
                nik: z.number().min(2, { message : "NIK tidak boleh kosong dan minimal 2 karakter"}),
                filektp: z.string().min(2, { message : "KTP tidak boleh kosong"}),
            });
        },
        async mounted() {
        },
        methods: {
            showmodal() {
                this.showModal = true;
                this.addnew = true;
                this.titlemodal = "Add Teams"
                this.uuidteams = ''
                this.fullname = ''
                this.nik = ''
                this.phone = ''
                this.email = ''
                this.file = []
                this.filektp = ''
            },
            hidemodalA() {
                this.showModal = false;
            },
            onFilePicked() {
                this.upload = this.$refs.file.files[0]
                this.file = [];
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.form.filektp = fileReader.result;
                    this.file.push({
                        data: fileReader.result,
                        name: this.upload.name
                    })
                })
                fileReader.readAsDataURL(this.upload)
            },
            savedata() {
                if (!this.validate()) {
                    this.$notify({
                        title: 'Periksa Inputan',
                        text: "silahkan periksa kembali inputan",
                        type: 'warning',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                    return true;
                }
                this.loader = this.$loading.show({
                    container: null,
                    canCancel: false,
                });
                try {
                    axios.post(this.url + 'teams', {
                            UID: uuidv4(),
                            lead_id: this.userId,
                            name: this.form.fullname,
                            nik: this.form.nik,
                            email: this.form.email,
                            phone: this.form.phone,
                            ktp: this.form.filektp
                        })
                        .then((response) => {
                            this.loader.hide();
                            if (response.data.status) {
                                this.$notify({
                                    title: 'Berhasil',
                                    text: response.data.message,
                                    type: 'success',
                                    duration: 5000, // Durasi notifikasi dalam milidetik
                                });
                            } else {
                                this.$notify({
                                    title: 'Gagal',
                                    text: response.data.message,
                                    type: 'error',
                                    duration: 5000, // Durasi notifikasi dalam milidetik
                                });
                            }
                            this.form = {
                                fullname: '',
                                email: '',
                                phone: '',
                                nik: '',
                                filektp: '',
                            },
                            this.hidemodalA();
                            this.$emit('update', 'updated');
                        })
                } catch (error) {
                    this.$notify({
                        title: 'Gagal',
                        text: error,
                        type: 'error',
                        duration: 5000, // Durasi notifikasi dalam milidetik
                    });
                }
            },
            validate() {
                try {
                    this.userSchema.parse(this.form);
                    return true;
                } catch (error) {
                    this.errors = error.formErrors.fieldErrors;
                    return false
                }
            },
        },
}
</script>