<template>
	<div class="questions">
		<div class="questions__container container">
			<div class="questions__title title">
				<h2>Есть вопросы?</h2>
			</div>
			<form action="#" method="post" class="questions__form">
				<div class="questions__block">
					<div class="questions__block-info">{{ infoText }}</div>
					<my-input type="text" name="username" id="" placeholder="Ваше имя" required />
					<my-input type="tel" name="phone" id="" placeholder="Ваш телефон" required />
					<my-button>Посмотреть район</my-button>					
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
	data() {
		return {
			infoText: "*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу."
		}
	},
	}
</script>

<style lang="scss" scoped>
.questions {
	margin-top: rem(180);
	// .questions__container

	&__container {
		width: 1100px;
		
	}

	// .questions__title

	&__title {
		margin-bottom: rem(50);
	}

	// .questions__form

	&__form {
		display: flex;
	}

	// .questions__block

	&__block {
		display: flex;
		align-items: center;

		input {
			margin-right: rem(30);
			min-width: 250px;
		}

		button {
			min-width: 250px;
			height: 50px;
		}
	}

	&__block-info {
		width: 25%;
		min-width: 255px;
		margin-right: rem(35);
		color: $cnote;
		font-size: 13px;
		font-weight: 400;
		font-family: $fRaleway;
	}
}
</style>