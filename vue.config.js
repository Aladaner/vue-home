const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({

	publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-home'
    : '/'
	,
	transpileDependencies: true,
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/assets/stylesheets/main.scss";`,
			},
		},
	},
});
