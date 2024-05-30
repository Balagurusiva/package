<script setup>
import { ref } from 'vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
const desserts = ref();

// const axios = useNuxtApp().$axios;

// onBeforeMount( async () => {
//     const res = await axios.get("https://cblaze-product.trainingzone.in/api/internal-assessments" ) 
//     console.log(res)
// })

const res = await $fetch('https://cblaze-product.trainingzone.in/api/internal-assessments', {
    method: 'GET', 
  })

desserts.value =res.assessments
 

 
</script>

<template>
    <v-row class="month-table"> 
        <v-col cols="12" sm="12">
            <UiChildCard title="Internal Assessment">
                <v-table fixed-header height="300px">
                    <thead>
                        <tr style="border-bottom: 1px solid rgb(203, 203, 203) !important;">
                            <th class="text-left">ID</th>
                            <th class="text-left">STUDENT ID</th>
                            <th class="text-left">SUBJECT ID</th>
                            <th class="text-left">TYPE</th>
                            <th class="text-left">SCORE</th>
                            <th class="text-left">MAX SCORE</th>
                            <th class="text-left">DATE</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name" style="border-bottom: 1px solid rgb(203, 203, 203) !important;">
                            <td>{{ item.id }}</td>
                            <td>{{ item.student_id }}</td>
                            <td>{{ item.subject_id }}</td>
                            <td>{{ item.type }}</td>
                            <td>{{ item.score }}</td>
                            <td>{{ item.max_score }}</td>
                            <td>{{ item.date }}</td> 
                        </tr>
                    </tbody>
                </v-table>
            </UiChildCard>
        </v-col>
    </v-row>


    
</template>