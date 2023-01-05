<template>
	<div>
		<div class="center-xy">
			<p>
				404, page not found.
			</p>
		</div>
	</div>
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

.center-xy {
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
}

html,
body {
	font-family: 'Roboto Mono', monospace;
	font-size: 16px;
}

body {
	background-color: #000;
}

p {
	color: #fff;
	font-size: 24px;
	letter-spacing: 0.2px;
	margin: 0;
}
</style>