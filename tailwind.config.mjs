import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontSize: {
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
		},
	},
	plugins: [typography],
}
