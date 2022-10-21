<template>
	<input class="input">
</template>

<script>
export default {
	name: 'my-input',
}
</script>

<style lang="scss" scoped>
.input {
	height: 50px;
	text-align: center;
	line-height: 50px;
	background: #ffffff17;
	color: $cmaintext;
	font-size: rem(14);
	cursor: pointer;

	&::placeholder {
		color: $cmaintext;
		transition: all ease 0.3s;
	}

	&:focus::placeholder {
		color: rgba(255, 255, 255, 0.212);
	}
}
</style>