const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./**/*.html"],
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1170px"
		},
		fontFamily: {
			primary: ['HK Grotesk'],
			secondary: ["Cormorant", "serif"]
		},
		fontSize: {
			xs: [".75rem", "1rem"],
			sm: [".875rem", "1.25rem"],
			tiny: ["15px", "1.05rem"],
			base: ["1rem", "1.5rem"],
			lg: ["1.125rem", "1.75rem"],
			xl: ["1.25rem", "1.75rem"],
			"2xl": ["1.5rem", "2rem"],
			"3xl": ["1.875rem", "2.25rem"],
			"4xl": ["2.25rem", "2.5rem"],
			"5xl": ["3rem", "3.5rem"],
			"6xl": ["3.75rem", "4.5rem"],
			"7xl": ["4.5rem", "5rem"],
		},
		extend: {
			colors: {
				gray: colors.gray,
				'gray-50': '#FBFAF7',
				transparent: "transparent",
				primary: "#B8A575",
				primarylight: "#FCF6E5",
				secondary: "#14910B",
				white: "#ffffff",
				heading: "#333333",
				default: "#000",
				black: "#000", 
			},
			typography: (theme) => ({
				DEFAULT:{
					css: {
						'h1, h2, h3, h4, h5, h6': {
							color: theme('colors.heading'),
							fontWeight: 'bold'
						},
						maxWidth:{
							'prose': '100%'
						}
					}
				}
			}),
		},
	},
	variants: {
		extend: {
			
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	],
};
