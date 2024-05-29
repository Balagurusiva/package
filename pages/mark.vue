<script setup>
	import { ref } from 'vue';
	import UiChildCard from '@/components/shared/UiChildCard.vue';
	 
	  const desserts = ref();

	const res = await $fetch(' https://cblaze-product.trainingzone.in/api/results', {
	    method: 'GET',
	  })

	desserts.value =res.results
</script>

<template>
	<v-row class="month-table">
		<v-col cols="12" sm="12">
			<UiChildCard title="Mark">
				<v-table fixed-header height="300px">
					<thead>
						<tr>
							<th class="text-left">ID</th>
							<th class="text-left">STUDENT ID</th>
							<th class="text-left">EXAM ID</th>
							<th class="text-left">MARK OBTAINED</th>
							<th class="text-left">MAX SCORE</th>
							<th class="text-left">GRADE</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in desserts" :key="item.name">
							<td>{{ item.id }}</td>
							<td>{{ item.student_id }}</td>
							<td>{{ item.exam_id }}</td>
							<td>{{ item.marks_obtained }}</td>
							<td>{{ item.max_marks }}</td>
							<td>{{ item.grade }}</td>
						</tr>
					</tbody>
				</v-table>
			</UiChildCard>
		</v-col>
	</v-row>
</template>
