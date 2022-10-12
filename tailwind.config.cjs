/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'soft-blue': 'hsl(231, 69%, 60%)',
				'soft-red': 'hsl(0, 94%, 66%)',
				'grayish-blue': 'hsl(229, 8%, 60%)',
				'dark-blue': 'hsl(229, 31%, 21%)',
			},
		},
		container: {
			center: true,
			padding: '1.8rem',
			screens: {
				/* 48px */
				lg: '1172px',
				xl: '1172px',
				'2xl': '1172px',
			},
		},
		fontFamily: {
			rubik: ['Rubik, sans-serif'],
		},
	},
	plugins: [],
};
