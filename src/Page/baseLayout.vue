<template>
   <div>
      <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
         <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
               <div class="flex items-center justify-start">
                  <button @click="slidebarAction()" id="toggleSidebarMobile" aria-expanded="true"
                     aria-controls="sidebar"
                     class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                     <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                           clip-rule="evenodd"></path>
                     </svg>
                     <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                           clip-rule="evenodd"></path>
                     </svg>
                  </button>
                  <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
                     <img src="../assets/favico.png" class="h-10 mr-2" alt="Windster Logo">
                     <span class="self-center whitespace-nowrap">DCMS</span>
                  </a>
                  <!-- <form action="#" method="GET" class="hidden lg:block lg:pl-32">
                  <label for="topbar-search" class="sr-only">Search</label>
                  <div class="mt-1 relative lg:w-64">
                     <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                     </div>
                     <input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search">
                  </div>
               </form> -->
               </div>
               <div class="flex items-center">
                  <!-- <button id="toggleSidebarMobileSearch" type="button" class="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                  <span class="sr-only">Search</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                  </svg>
               </button> -->
                  <a href="#"
                     class="hidden sm:inline-flex ml-5 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                     <i class="fa fa-user pr-3"></i>
                     {{ mydata }}
                  </a>
                  <span @click="logout()"
                     class="cursor-pointer inline-flex ml-5 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                     Logout
                  </span>
               </div>
            </div>
         </div>
      </nav>
      <div class="flex overflow-hidden bg-white pt-16">
         <aside id="sidebar" :class="slidebar ? 'flex' : 'hidden'"
            class="fixed z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
            aria-label="Sidebar">
            <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
               <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div class="flex-1 px-3 bg-white divide-y space-y-1">
                     <ul class="space-y-2 pb-2">
                        <li>
                           <form action="#" method="GET" class="lg:hidden">
                              <label for="mobile-search" class="sr-only">Search</label>
                              <div class="relative">
                                 <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                       </path>
                                    </svg>
                                 </div>
                                 <input type="text" name="email" id="mobile-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 block w-full pl-10 p-2.5"
                                    placeholder="Search">
                              </div>
                           </form>
                        </li>
                        <li>
                           <router-link
                              :class="$route.path === '/' ? 'bg-orange-600 text-white ' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-100 group'"
                              to="/" class="text-base  font-normal  rounded-lg flex items-center p-2 ">
                              <svg class="w-6 h-6 group-hover:text-gray-900 transition duration-75" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                 <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                              </svg>
                              <span class="ml-3">Dashboard</span>
                           </router-link>
                        </li>
                        <li>
                           <router-link to="/request"
                              :class="$route.path === '/request' || $route.path === '/request/add' ? 'bg-orange-600 text-white ' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-100 group'"
                              class="text-base font-normal rounded-lg flex items-center p-2">
                              <svg class="w-6 h-6 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                 </path>
                              </svg>
                              <span class="ml-3 flex-1 whitespace-nowrap">Request DC</span>
                           </router-link>
                        </li>
                        <li>
                           <router-link to="/teams"
                              :class="$route.path === '/teams' ? 'bg-orange-600 text-white ' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-100 group'"
                              class="text-base font-normal rounded-lg  flex items-center p-2 ">
                              <svg class="w-6 h-6  flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                 </path>
                                 <path
                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                 </path>
                              </svg>
                              <span class="ml-3 flex-1 whitespace-nowrap">Teams</span>
                           </router-link>
                        </li>
                        <li>
                           <router-link to="/products"
                              :class="$route.path === '/products' ? 'bg-orange-600 text-white ' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-100 group'"
                              class="text-base  font-normal rounded-lg  flex items-center p-2">
                              <svg class="w-6 h-6 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd"
                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                    clip-rule="evenodd"></path>
                              </svg>
                              <span class="ml-3 flex-1 whitespace-nowrap">Products</span>
                           </router-link>
                        </li>
                        <li>
                           <router-link :to="availableVPN !== '' ? '/vpnclient' : ''"
                              :class="$route.path === '/vpnclient' ? 'bg-orange-600 text-white ' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-100 group'"
                              class="text-base flex items-center p-2 group ">
                              <svg fill="currentColor" class="w-6 h-6" viewBox="-5.53 0 122.88 122.88" version="1.1"
                                 id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                 style="enable-background:new 0 0 111.82 122.88" xml:space="preserve">
                                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                 <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                 <g id="SVGRepo_iconCarrier">
                                    <g>
                                       <path class="st0"
                                          d="M55.72,0c20.87,13.2,39.67,19.47,55.85,17.99c2.84,57.11-18.25,90.84-55.63,104.89 C19.84,109.72-1.5,77.42,0.08,17.11C19.07,18.1,37.69,14.01,55.72,0L55.72,0z M20.14,44.81h7.11l4.95,15.83l4.87-15.83h6.9 L35.81,66.8h-7.36L20.14,44.81L20.14,44.81z M45.67,44.81h11.29c2.46,0,4.3,0.58,5.52,1.76c1.22,1.17,1.84,2.84,1.84,4.99 c0,2.22-0.67,3.96-2,5.21c-1.34,1.25-3.37,1.87-6.11,1.87h-3.72v8.16h-6.82V44.81L45.67,44.81z M52.49,54.18h1.66 c1.31,0,2.23-0.23,2.76-0.68c0.53-0.46,0.79-1.03,0.79-1.75c0-0.69-0.23-1.28-0.69-1.76c-0.46-0.48-1.32-0.72-2.59-0.72h-1.94 V54.18L52.49,54.18z M67.41,44.81h6.35l8.28,12.17V44.81h6.41V66.8h-6.41L73.8,54.72V66.8h-6.39V44.81L67.41,44.81z M55.72,7.04 c18.47,11.69,35.13,17.22,49.44,15.93c2.51,50.55-16.18,80.41-49.26,92.87C23.97,104.19,5.06,75.62,6.46,22.23 c16.81,0.88,33.29-2.76,49.26-15.15V7.04L55.72,7.04z">
                                       </path>
                                    </g>
                                 </g>
                              </svg>
                              <span class="ml-3 flex-1 whitespace-nowrap">VPN Manage</span>
                           </router-link>
                        </li>
                        <li>
                           <router-link to="/profile"
                              :class="$route.path === '/profile' ? 'bg-orange-600 text-white ' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-100 group'"
                              class="text-base flex items-center p-2 group ">
                              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                 <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                 <g id="SVGRepo_iconCarrier">
                                    <path
                                       d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                                       fill="currentColor"></path>
                                    <path
                                       d="M14.0809 14.1489C11.2909 12.2889 6.74094 12.2889 3.93094 14.1489C2.66094 14.9989 1.96094 16.1489 1.96094 17.3789C1.96094 18.6089 2.66094 19.7489 3.92094 20.5889C5.32094 21.5289 7.16094 21.9989 9.00094 21.9989C10.8409 21.9989 12.6809 21.5289 14.0809 20.5889C15.3409 19.7389 16.0409 18.5989 16.0409 17.3589C16.0309 16.1289 15.3409 14.9889 14.0809 14.1489Z"
                                       fill="currentColor"></path>
                                    <path
                                       d="M19.9894 7.33815C20.1494 9.27815 18.7694 10.9781 16.8594 11.2081C16.8494 11.2081 16.8494 11.2081 16.8394 11.2081H16.8094C16.7494 11.2081 16.6894 11.2081 16.6394 11.2281C15.6694 11.2781 14.7794 10.9681 14.1094 10.3981C15.1394 9.47815 15.7294 8.09815 15.6094 6.59815C15.5394 5.78815 15.2594 5.04815 14.8394 4.41815C15.2194 4.22815 15.6594 4.10815 16.1094 4.06815C18.0694 3.89815 19.8194 5.35815 19.9894 7.33815Z"
                                       fill="currentColor"></path>
                                    <path
                                       d="M21.9883 16.5904C21.9083 17.5604 21.2883 18.4004 20.2483 18.9704C19.2483 19.5204 17.9883 19.7804 16.7383 19.7504C17.4583 19.1004 17.8783 18.2904 17.9583 17.4304C18.0583 16.1904 17.4683 15.0004 16.2883 14.0504C15.6183 13.5204 14.8383 13.1004 13.9883 12.7904C16.1983 12.1504 18.9783 12.5804 20.6883 13.9604C21.6083 14.7004 22.0783 15.6304 21.9883 16.5904Z"
                                       fill="currentColor"></path>
                                 </g>
                              </svg>
                              <span class="ml-3 flex-1 whitespace-nowrap">Profile</span>
                           </router-link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </aside>
         <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
         <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <slot></slot>
            <footer
               class="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
               <div class="flex sm:justify-center space-x-6">
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                     <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                           d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                           clip-rule="evenodd" />
                     </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                     <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                           d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                           clip-rule="evenodd" />
                     </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                     <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                           d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                     </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                     <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                           d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                           clip-rule="evenodd" />
                     </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                     <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                           d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                           clip-rule="evenodd" />
                     </svg>
                  </a>
               </div>
            </footer>
            <p class="text-center text-sm text-gray-500 my-10">
               &copy; {{ new Date().getFullYear() }} <a href="#" class="hover:underline"
                  target="_blank">Antmediahost</a>. All rights reserved.
            </p>
         </div>
      </div>

   </div>
</template>

<script>
import axios from 'axios';
export default {
   name: 'baseLy',
   data() {
      return {
         mydata: this.$storage.getStorageSync("username"),
         slidebar: false,
         url: import.meta.env.VITE_APIBASE,
         userId: this.$storage.getStorageSync("user_id"),
         availableVPN: ''
      }
   },
   created() {
      this.getdata()
   },
   methods: {
      slidebarAction() {
         this.slidebar = !this.slidebar;
      },
      getdata() {
         axios.get(this.url + 'getUser/' + this.userId).then(({ data }) => {
            this.availableVPN = data.data.vpn;
            if (this.availableVPN == null) {
               this.availableVPN = ''
            }
         })
      },
      logout() {
         this.$storage.removeStorageSync("token");
         this.$storage.removeStorageSync("user_id");
         this.$storage.removeStorageSync("username")
         this.$storage.removeStorageSync("userId");
         this.$storage.removeStorageSync("token");
         this.$router.push('/login')
      }
   },
}
</script>