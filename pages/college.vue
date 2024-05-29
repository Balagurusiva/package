<script setup>
import { ref } from 'vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
 

const desserts = ref();

const res = await $fetch('https://cblaze-product.trainingzone.in/api/colleges/id', {
    method: 'GET', 
  })

desserts.value =res.questions
</script>

<template>
    <v-row class="month-table"> 
        <v-col cols="12" sm="12">
            <UiChildCard title="College Details">
                <v-table fixed-header height="300px">
                    <thead>
                        <tr>
                            <th class="text-left">NAME</th>
                            <th class="text-left">EMAIL</th>
                            <th class="text-left">LOCATIOIN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.location }}</td>
                            <td>{{ item.email }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </UiChildCard>
        </v-col>
    </v-row>


    
</template>