import plugin from 'flowbite/plugin';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            colors: {
                ...colors,
                primary: '#3E5F8A',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            },
        },
    },
    plugins: [plugin],
};
