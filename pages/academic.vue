<script setup>
	import { ref } from "vue";
	import UiChildCard from "@/components/shared/UiChildCard.vue";

	const desserts = ref();

	const res = await $fetch(
		"https://cblaze-product.trainingzone.in/api/years",
		{
			method: "GET",
		}
	);

	desserts.value = res.year;
</script>

<template>
	<v-row class="month-table">
		<v-col cols="12" sm="12">
			<UiChildCard title="Subjects">
				<v-table fixed-header height="300px">
					<thead>
						<tr style="border-bottom: 1px solid rgb(203, 203, 203) !important">
							<th class="text-left">ID</th>
							<th class="text-left">ACADEMIC YEAR START</th>
							<th class="text-left">ACADEMIC YEAR END</th> 
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="item in desserts"
							:key="item.name"
							style="border-bottom: 1px solid rgb(203, 203, 203) !important"
						>
							<td>{{ item.id }}</td>
							<td>{{ item.academic_year_start}}</td>
							<td>{{ item.academic_year_start}}</td> 
						</tr>
					</tbody>
				</v-table>
			</UiChildCard>
		</v-col>
	</v-row>
</template>
