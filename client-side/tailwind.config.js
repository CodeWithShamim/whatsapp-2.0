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
        themes: [{
                mytheme: {
                    primary: "#F54648",
                    secondary: "#ffffff",
                    accent: "#25ea8e",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
            "light",
            "cupcake",
        ],
    },
    plugins: [require("daisyui")],
}