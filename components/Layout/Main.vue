<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import sidebarItems from '@/components/Layout/Full/vertical-sidebar/sidebarItem';
// Icon Imports
import { Menu2Icon, BellRingingIcon } from 'vue-tabler-icons';
const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);

</script>

<template>
    <v-navigation-drawer left v-model="sDrawer" app class="leftSidebar ml-sm-5 mt-sm-5 bg-containerBg" elevation="10"
        width="270">
        <div class="pa-5 pl-4 ">
            <h1>Dashboard</h1>
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <perfect-scrollbar class="scrollnavbar bg-containerBg overflow-y-hidden">
            <v-list class="py-4 px-4 bg-containerBg">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu">
                    <!---Item Sub Header -->
                    <LayoutFullVerticalSidebarNavGroup :item="item" v-if="item.header" :key="item.title" />
                    <!---Single Item-->
                    <LayoutFullVerticalSidebarNavItem :item="item" v-else class="leftPadding" />
                    <!---End Single Item-->
                </template>
                <!-- <Moreoption/> -->
            </v-list>
         
        </perfect-scrollbar>
    </v-navigation-drawer>
    <div class="container verticalLayout">
        <div class="maxWidth">
            <v-app-bar elevation="0" height="70">
                <div class="d-flex align-center justify-end w-100"> 
                    <div>
                        User Name 
                        <LayoutFullVerticalHeaderProfileDD />
                    </div>
                </div>
            </v-app-bar>
        </div>
    </div> 
</template>
