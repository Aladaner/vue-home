<template>

	<div class="wrapper">
		<div class="rectangle">
			<img src="../assets/img/HeaderBack.png" alt="">
			<Navbar />

			<Contacts phoneNumber="+380 000 00 00" location="Київ, вул Кондукторська, 39" />

		</div>

		<Peculiarities />
		<Apartments />
		<Preview />
		<VideoBlock />
		<MapBlock />
		<Questions />
		<Footer />
	</div>

</template>



<script>
import Navbar from '@/components/Navbar.vue';
import Contacts from '@/components/Contacts.vue';
import Peculiarities from '@/components/Peculiarities.vue';
import Apartments from '@/components/Apartments.vue';
import Preview from '@/components/Preview.vue';
import VideoBlock from '@/components/VideoBlock.vue';
import MapBlock from '@/components/MapBlock.vue';
import Questions from '@/components/Questions.vue';
import Footer from '@/components/Footer.vue';
export default {
	components: { Navbar, Contacts, Peculiarities, Apartments, Preview, VideoBlock, MapBlock, Questions, Footer }
}
</script>

<style lang="scss" scoped>
.wrapper {
	background-color: $cbackground;
}

.rectangle {
	overflow: hidden;
	height: 100vh;
	position: relative;

	& img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

}
</style>