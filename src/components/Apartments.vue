<template>
	<div class="apartments">
		<div class="apartments__container container">
			<div class="apartments__title">
				<h2>Наши квартиры</h2>
			</div>

			<div class="apartments__items">
				<div class="apartments__item" v-for="(apartment, idx) in apartments" :key="idx">
					<img :src="apartment.image" alt="">
					<div class="apartments__item-text">{{ apartment.text}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			apartments: [
				{
					text: "Лофт — 3 этажа",
					image: require("../assets/img/apartment_1.png")
				},
				{
					text: "Лофт — 2 этажа",
					image: require("../assets/img/apartment_2.png")
				},
				{
					text: "Лофт — 3 этажа",
					image: require("../assets/img/apartment_3.png")
				},
				{
					text: "Лофт — 2 этажа",
					image: require("../assets/img/apartment_4.png")
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.apartments {
	padding-top: rem(45);
	// .apartments__container

	&__container {
		width: 1100px;
	}

	// .apartments__title

	&__title {
		font-family: $fPlayfair;
		font-weight: 700;
		font-size: rem(36);
		line-height: rem(48);
		color: $ctitle;
		margin-bottom: rem(100);
		text-align: left;
	}

	// .apartments__items

	&__items {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: rem(30);
	}

	// .apartments__item

	&__item {
		overflow: hidden;
		position: relative;
	}

	// .apartments__item-text

	&__item-text {
		position: absolute;
		left: 0;
		bottom: 0;
		font-size: rem(24);
		font-weight: 400;
		line-height: rem(28);
		padding: 10%;
		color: $cmaintext;
	}
}
</style>