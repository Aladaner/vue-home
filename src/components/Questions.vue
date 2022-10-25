<template>
	<div class="questions">
		<div class="questions__container container">
			<div class="questions__title title">
				<h2>Есть вопросы?</h2>
			</div>
			<form action="#" method="post" class="questions__form">
				<div class="questions__block">
					<div class="questions__block-inputs">
						<my-input type="text" name="username" id="" placeholder="Ваше имя" required />
						<my-input type="tel" name="phone" id="" placeholder="Ваш телефон" required />
					</div>
					<div class="questions__block-other">
						<div class="questions__block-info">{{ infoText }}</div>
						<my-button>Посмотреть район</my-button>
					</div>
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

	// .questions__container

	&__container {
		width: 1100px;
		
	}

	// .questions__title

	&__title {}

	// .questions__form

	&__form {
		display: flex;
	}

	// .questions__block

	&__block {}

	// .questions__block-inputs

	&__block-inputs {}

	// .questions__block-other

	&__block-other {}

	// .questions__block-info

	&__block-info {}
}
</style>