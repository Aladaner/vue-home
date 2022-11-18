<template>
	<footer class="footer">
		<div class="footer__container container">
			<div class="footer__logo">
				<div class="footer__logo-title">HouseVOP</div>
				<div class="footer__logo-subtitle">ЖИЛОЙ КОМПЛЕКС</div>
			</div>

			<div class="footer__menu">
				<ul class="footer__menu-list">
					<li class="footer__menu-item" v-for="(item, idx) in FooterList" :key="idx">
						<router-link to="/">{{ item.text }}</router-link>
					</li>
				</ul>
			</div>
			<div class="footer__menu">
				<ul class="footer__menu-list"></ul>
			</div>
			<div class="footer__menu">
				<ul class="footer__menu-list"></ul>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				FooterList: [
					{						
						text: "О комплексе"
					},
					{
						text: "Район"
					},
					{

						text: "Каталог квартир"
					},
					{
						text: "Ипотека"
					},
					{
						text: "Контакты"
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>