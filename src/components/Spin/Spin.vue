<template lang="jade">
	.wtl-spin(:class="[size, {sping: sping}]")
		.wtl-spin-points
			div
			div
			div
</template>

<script>
	export default {
		props: {
			size: {
				type: String,
				default: 'default'
			},
			sping: Boolean
		},
		data () {
			return {

			}
		}
	}
</script>
