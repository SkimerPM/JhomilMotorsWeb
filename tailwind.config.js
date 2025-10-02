/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./**/*.{html,js}"
    ],
    theme: {
        extend: {
            colors: {
                // Colores para modo claro
                'blue-primary': '#1D428A',
                'red-primary': '#7E021A',
                'background-light': '#FFFFFF',
                'surface-light': '#F0F5FF',
                'on-background-light': '#0D224B',
                'on-surface-light': '#333333',
                'accent-light': '#84AEFF',
                // Colores para modo oscuro
                'blue-primary-dark': '#90B4FF',
                'red-primary-dark': '#FF6B6B',
                'background-dark': '#121212',
                'surface-dark': '#1E1E1E',
                'on-background-dark': '#EAEAEA',
                'on-surface-dark': '#CCCCCC',
                'accent-dark': '#5C8DFF',
            },
        },
    },
    plugins: [],
}