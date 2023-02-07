module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,css,html,svg}'
	],
	swDest: 'dist/sw.js',
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ],
	swSrc: 'src/sw-template.js' // generateSW no funciona con esta propiedad
};