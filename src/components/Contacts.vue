<template>
	<div>
		<div class="bottom__contacts">
			<div class="bottom__contacts-map"><a href="404">{{ location }}</a></div>
			<div class="bottom__contacts-phone"><a href="tel:{{ phoneNumber }}">{{ phoneNumber }}</a></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		phoneNumber: String,
		location: String
	}
}
</script>

<style lang="scss" scoped>
.bottom {

	// .bottom__contacts

	&__contacts {
		position: absolute;
		display: flex;
		justify-content: center;
		left: 0;
		bottom: 5%;
		width: 100%;
		gap: rem(150);
	}

	&__contacts-map,
	&__contacts-phone {
		font-weight: 400;
		line-height: rem(21);
		font-size: rem(18);
		text-align: center;
		position: relative;

		a {
			color: $cmaintext;
		}

		&:hover {
			text-shadow: 0px 0px 15px #fff, 0px 0px 5px $ctitle;
		}

		&::before {
			content: '';
			position: absolute;
			left: rem(-30);
			width: rem(21);
			height: rem(21);
		}
	}

	// .bottom__contacts-map

	&__contacts-map {
		&::before {
			background: url('/src/assets/icons/placeholder.svg') 50% no-repeat;
		}
	}


	// .bottom__contacts-phone

	&__contacts-phone {
		&::before {
			background: url('/src/assets/icons/phone-call.svg') 50% no-repeat;
		}
	}
}
</style>