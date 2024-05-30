<script setup>
import { ref } from 'vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
const desserts = ref();

const res = await $fetch('https://cblaze-product.trainingzone.in/api/attendance', {
    method: 'GET', 
  })

 

desserts.value =res.attendance


</script>

<template>
    <v-row class="month-table"> 
        <v-col cols="12" sm="12">
            <UiChildCard title="Attendance">
                <v-table fixed-header height="300px">
                    <thead>
                        <tr style="border-bottom: 1px solid rgb(203, 203, 203) !important;">
                            <th class="text-left">ID</th>
                            <th class="text-left">STUDENT ID</th>
                            <th class="text-left">SUBJECT ID</th>
                            <th class="text-left">DATE</th>
                            <th class="text-left">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name" style="border-bottom: 1px solid rgb(203, 203, 203) !important;">
                            <td>{{ item.id }}</td>
                            <td>{{ item.student_id }}</td>
                            <td>{{ item.subject_id }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.status }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </UiChildCard>
        </v-col>
    </v-row>


    
</template>