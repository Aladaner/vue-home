<template>
	<div class="preview bg">
		<div class="preview__container container">
			<div class="preview__body">
				<div class="preview__content">
					<div class="preview__content-title">
						<h2>Хотите посмотреть?</h2>
					</div>
					<div class="preview__content-text">{{ contentText }}</div>
				</div>
				<form action="#" method="post" class="preview__form">
					<div class="preview__block">
						<div class="preview__block-inputs">
							<my-input type="text" name="username" id="" placeholder="Ваше имя" required />
							<my-input type="tel" name="phone" id="" placeholder="Ваш телефон" required />
						</div>
						<div class="preview__block-other">
							<div class="preview__block-info">{{ infoText}}</div>
							<my-button>Посмотреть район</my-button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<img src="../assets/img/PrewievBack.png" alt="">
	</div>
</template>

<script>
import MyInput from './UI/MyInput.vue';
import MyButton from './UI/MyButton.vue';
export default {
	data() {
		return {
			contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magnam, id nemo hic nihil in sapiente? Cum ullam suscipit reprehenderit consequuntur expedita autem voluptatibus, unde, voluptatum fuga perferendis quia veritatis.",
			infoText: "*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу."
		};
	},
	components: { MyInput, MyButton }
}
</script>

<style lang="scss" scoped>
.bg {
	position: relative;

	& img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		top: 0;
		left: 0;
	}
}
.preview {
	padding: rem(30) 0;
	
	// .preview__container

	&__container {
		width: 1100px;
	}

	// .preview__body

	&__body {
		position: relative;
		min-height: rem(560);
		z-index: 1;
		display: flex;
		gap: rem(35);
		align-items: center;
	}

	&__content,
	&__form,
	input, button,
	&__block-info {
		flex: 1 1 50%;
	}

	// .preview__content-title

	&__content-title {
		font-family: $fPlayfair;
		font-weight: 700;
		font-size: rem(36);
		line-height: rem(48);
		color: $ctitle;
		text-align: left;
		margin-bottom: 50px;
	}

	// .preview__content-text

	&__content-text {
		font-family: $fRaleway;
		font-weight: 400;
		font-size: rem(16);
		line-height: rem(24);
		color: $cmaintext;
		text-align: left;
	}

	// .preview__block-inputs

	&__block-inputs {
		padding: 30px 0;
	}

	&__block-inputs,
	&__block-other {
		display: flex;
		align-items: center;
		gap: rem(30);
	}

	// .preview__block-info

	&__block-info {
		font-family: $fRaleway;
		font-weight: 400;
		font-size: rem(13);
		line-height: rem(16);
		text-align: center;
		color: $cmaintext;
	}
}
</style>