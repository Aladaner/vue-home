<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'my-button'
}
</script>

<style lang="scss" scoped>
.btn {
	cursor: pointer;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: $cmaintext;
	background-color: $ctitle;
	min-height: rem(40);
	font-weight: 700;
	font-size: rem(16);
	line-height: rem(27);

	&:focus {
		box-shadow: 0 0 10px 0px #fff;
	}

	&:hover {
		background-color: $cmaintext;
		color: $ctitle;
	}
}
</style>