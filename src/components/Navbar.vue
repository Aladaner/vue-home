<template>
	<header class="header">
		<div class="header__wrapper">
			<div class="header__container container">
				<div class="header__body">
					<router-link to="/">
						<div class="header__logo">
							<div class="header__logo-title">HouseVOP</div>
							<div class="header__logo-subtitle">ЖИЛОЙ КОМПЛЕКС</div>
						</div>
					</router-link>

					<div class="header__contacts visually-hidden">
						<a href="tel:+380000000000">(000) 000-00-00</a>
					</div>

					<nav class="header__menu">
						<ul class="header__menu-links">
							<li>
								<router-link to="/" class="header__menu-link">О комплексе</router-link>
							</li>
							<li>
								<router-link to="/" class="header__menu-link">Район</router-link>
							</li>
							<li>
								<router-link to="/" class="header__menu-link">Каталог квартир</router-link>
							</li>
							<li>
								<router-link to="/" class="header__menu-link">Ипотека</router-link>
							</li>
							<li>
								<router-link to="/" class="header__menu-link">Контакты</router-link>
							</li>
							<li>
								<router-link to="/" class="header__menu-link">Контакты</router-link>
							</li>
						</ul>
					</nav>

					<!-- <div class="burger"></div> -->
				</div>
			</div>
		</div>
	</header>
	<div class="center__title">
		<h1>
			Жилой комплекс <br>
			в историческом центре
		</h1>
	</div>
</template>

<script>
export default {
}

</script>

<style lang="scss" scoped>
.header {
	position: relative;
	
	// .header__body

	&__body {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	// .header__logo

	&__logo {
		text-align: center;
		padding: rem(25) 0;
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

	// .header__menu-links

	&__menu-links {
		display: flex;
		gap: rem(40);
	}

	// .header__menu-link

	&__menu-link {
		font-family: $fRaleway;
		color: $cmaintext;
		font-size: rem(14);
		font-weight: 400;
		line-height: rem(16);
		letter-spacing: rem(0.5);
		position: relative;
		transition: color cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;

		&:hover {
			color: $ctitle;
		}

		&::before {
			content: '';
			width: 100%;
			height: 1px;
			background-color: $ctitle;
			position: absolute;
			bottom: -7px;
			left: 0;
			transform: scale(0);
			transition: transform cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s, box-shadow 0.4s ease 0.2s;
		}

		&:hover::before {
			transform: scale(1.1);
			box-shadow: 0px 2px 7px 0px #fff;
		}
	}
}

.center__title {
	position: absolute;
	width: 100%;
	top: 50%;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: rem(10);

	h1 {
		font-family: $fPlayfair;
		font-weight: 700;
		font-size: rem(40);
		line-height: rem(50);
		text-align: center;
		color: $ctitle;
	}
}
</style>