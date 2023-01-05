<template>
	<footer class="footer">
		<div class="footer__container container">
			
			<div class="footer__logo">
				<div class="footer__logo-title">HouseVOP</div>
				<div class="footer__logo-subtitle">ЖИЛОЙ КОМПЛЕКС</div>
			</div>

			<div class="footer__menu menu-1">
				<ul class="footer__menu-list">
					<li class="footer__menu-item" v-for="(item, idx) in FooterMenuList" :key="idx">
						<router-link to="/">{{ item.text }}</router-link>
					</li>
				</ul>
			</div>
			
			<div class="footer__menu menu-2">
				<ul class="footer__menu-list">
					<li class="footer__menu-item" v-for="(item, idx) in FooterMenuList" :key="idx">
						<router-link to="/">{{ item.text }}</router-link>
					</li>
				</ul>
			</div>

			<div class="footer__contacts">
				<ul class="footer__list">
					<li class="footer__item" v-for="(item, idx) in FooterContactList" :key="idx">
						<span>{{ item.name }}</span> <a href="">{{ item.text }}</a>
					</li>
				</ul>
			</div>
			
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				FooterMenuList: [
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
				],
				FooterContactList: [
					{
						name: "Адрес:",
						text: "Київ, вул Кондукторська, 39"
					},
					{
						name: "Телефон:",
						text: "+380 000 00 00"
					},
					{
						name: "Отдел продаж",
						text: "10:00 - 20:00"
					},
					{
						name: "E-mail:",
						text: "test@gmail.com"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>