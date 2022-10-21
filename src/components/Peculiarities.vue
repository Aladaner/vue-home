<template>
	<div class="peculiarities">
		<div class="peculiarities__container container">
			<div class="peculiarities__items">
				<div class="peculiarities__item" v-for="(peculiarity, idx) in peculiarities" :key="idx">
					<div class="peculiarities__image">
						<img :src="peculiarity.image">
					</div>
					<div class="peculiarities__text">{{ peculiarity.text }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			peculiarities: [
				{
					text: "Рядом исторические парки и скверы",
					image: require("../assets/icons/bench.svg"),
				},
				{
					text: "Полностью обустроенный",
					image: require("../assets/icons/building.svg"),
				},
				{
					text: "10 фонтанов на территории",
					image: require("../assets/icons/fountain.svg"),
				},
				{
					text: "6 км велодорожек",
					image: require("../assets/icons/bicycle.svg"),
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.peculiarities {
	color: $cmaintext;
	// .peculiarities__container

	&__container {
		position: relative;
		width: 800px;
		padding: rem(100) 0 rem(60) 0;
	}

	// .peculiarities__items

	&__items {
		display: flex;
		justify-content: center;
		gap: rem(30);
	}

	// .peculiarities__item

	&__item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	// .peculiarities__image

	&__image {
		margin-bottom: rem(30);
	}

	// .peculiarities__text

	&__text {
		// color: $cmaintext;
		font-family: $fRoboto;
		font-weight: 300;
		font-size: rem(20);
		line-height: rem(27);
		text-align: center;
	}
}
</style>