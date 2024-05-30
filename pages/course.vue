<script setup>
import { ref } from 'vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
 

const desserts = ref();

const res = await $fetch('https://cblaze-product.trainingzone.in/api/courses', {
    method: 'GET', 
  })

desserts.value =res.course
</script>

<template>
    <v-row class="month-table"> 
        <v-col cols="12" sm="12">
            <UiChildCard title="Courses">
                <v-table fixed-header height="300px">
                    <thead>
                        <tr style="border-bottom: 1px solid rgb(203, 203, 203) !important;">
                            <th class="text-left">ID</th>
                            <th class="text-left">NAME</th>  
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name" style="border-bottom: 1px solid rgb(203, 203, 203) !important;">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td> 
                        </tr>
                    </tbody>
                </v-table>
            </UiChildCard>
        </v-col>
    </v-row>
    


    
</template>

<style>
table{
    border-collapse: collapse !important;
}

tab

tr{
    border-bottom: 1.5px solid rgb(203, 203, 203) !important;
}

</style>