<template>
	<div class="box has-text-weght-bold">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
	export default defineComponent({
		name: "Box"
	})
</script>
<style scoped>
	.box {
		background-color: #FAF0CA;
	}
</style>