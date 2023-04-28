import plugin from 'flowbite/plugin';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            colors: {
                ...colors,
                // primary: '#3E5F8A',
                // 'primary-500': '#CADFFB',
                'primary-950': '#2F4D74',
                'primary-900': '#3E5F8A',
                'primary-800': '#4874AD',
                'primary-700': '#5C8DCC',
                'primary-600': '#95B6DF',
                'primary-500': '#BCD1EB',
                'primary-400': '#C4D6ED',
                'primary-300': '#D0DFF1',
                'primary-200': '#E0E8F6',
                'primary-100': '#EFF3FA',
                'primary-50': '#F6F8FC',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            },
            backgroundImage: {
                'logo-pattern': "url('/src/assets/logo-cut-xl-02.svg')",
            },
        },
    },
    plugins: [plugin],
};
