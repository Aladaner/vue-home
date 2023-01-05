<template>
	<footer class="footer">
		<div class="footer__container container">
			<router-link to="/">
				<div class="footer__logo">
					<div class="footer__logo-title">HouseVOP</div>
					<div class="footer__logo-subtitle">ЖИЛОЙ КОМПЛЕКС</div>
				</div>
			</router-link>
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
				<ul class="footer__menu-list">
					<li class="footer__menu-item" v-for="(item, idx) in FooterContactList" :key="idx">
						<span>{{ item.name }}</span> <a href="">{{ item.text }}</a>
					</li>
				</ul>
				<div class="footer__social">
					<div class="social__items" v-for="(item, idx) in FooterSocial" :key="idx">
						<a href=""><img :src="item.image"></a>
					</div>
				</div>
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
			],

			FooterSocial: [
				{
					name: "yt",
					image: require("../assets/icons/yt.svg")
				},
				{
					name: "vk",
					image: require("../assets/icons/vk.svg")
				},
				{
					name: "fb",
					image: require("../assets/icons/fb.svg")
				},
				{
					name: "inst",
					image: require("../assets/icons/inst.svg")
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
	background-color: $fbackground;
	min-height: rem(295);
	margin-top: rem(180);
	// .footer__container

	&__container {
		padding: rem(60) 0;
		display: flex;
		justify-content: space-between;
	}

	// .footer__logo

	&__logo {
		text-align: center;
		padding: 0 0 rem(25) 0;
		margin-top: rem(-10);
		color: $cmaintext;
		display: inline-block;
		position: relative;
		transition: color ease 0.7s;

		&:hover {
			color: $ctitle;
		}

		&::before {
			content: '';
			width: 100%;
			height: 1px;
			background-color: $ctitle;
			position: absolute;
			bottom: 18px;
			left: 0;
			transform: scale(0);
			transition: transform cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s, box-shadow 0.4s ease 0.2s;
		}

		&:hover::before {
			transform: scale(1.1);
			box-shadow: 0px 2px 7px 0px #fff;
		}
	}

	// .header__logo-title

	&__logo-title {
		font-family: 'PostNoBillsJaffna-SemiBold';
		font-weight: 600;
		font-size: rem(36);
		line-height: rem(54);
	}

	// .header__logo-subtitle

	&__logo-subtitle {
		font-family: $fRaleway;
		font-weight: 400;
		font-size: rem(12);
		line-height: rem(14);
	}

	// .footer__menu

	&__menu {}

	// .footer__menu-list

	&__menu-list {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	// .footer__menu-item

	&__menu-item {
		padding: rem(5);

		a,
		span {
			color: $cmaintext;
			font-family: $fRaleway;
			font-weight: 400;
			font-size: rem(14);
			line-height: rem(16);
			transition: color ease 0.3s;
		}

		a:hover {
			color: $ctitle;
		}
	}

	// .footer__contacts

	&__contacts {}

	// .footer__list

	&__list {}

	// .footer__item

	&__item {}

	// .footer__social

	&__social {
		display: flex;
		justify-content: space-around;
		margin-top: rem(20);
	}
}
</style>