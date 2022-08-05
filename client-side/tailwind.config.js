/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [

            {
                light: {
                    "primary": "#F54648",
                    "secondary": "#FFFFFF",
                    "accent": "#25ea8e",
                    "neutral": "#3d4451",
                    "base-100": "#FFFFFF",
                },
            },
            {
                dark: {
                    "primary": "#F54648",
                    "secondary": "#FFFFFF",
                    "accent": "#25ea8e",
                    "neutral": "#3d4451",
                    "base-100": "#0C0F2C",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}