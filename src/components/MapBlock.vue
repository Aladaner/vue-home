<template>
	<div class="map">
		<div class="map__container container">
			<div class="map__title title">
				<h2>Район на карте</h2>
			</div>
			<div class="map__body">
				<img src="../assets/map.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
.map {

	// .map__container

	&__container {
		width: 1100px;
		padding-top: rem(100);
	}

	// .map__title

	&__title {
		margin-bottom: rem(50);
	}
}
</style>