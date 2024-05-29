<script setup>
import { ref } from 'vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
 
 const desserts = ref();

const res = await $fetch('https://cblaze-product.trainingzone.in/api/students/ut', {
    method: 'GET', 
  })

desserts.value =res.questions
</script>

<template>
    <v-row class="month-table"> 
        <v-col cols="12" sm="12">
            <UiChildCard title="Student Details">
                <v-table fixed-header height="300px">
                    <thead>
                        <tr>
                            <th class="text-left">ID</th>
                            <th class="text-left">NAME</th>
                            <th class="text-left">PHONE NO</th>
                            <th class="text-left">EMAIL</th>
                            <th class="text-left">COLLEGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                             <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.college_id }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </UiChildCard>
        </v-col>
    </v-row>


    
</template>