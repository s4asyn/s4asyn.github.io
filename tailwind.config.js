module.exports = {
    theme: {
        extend: {
            fontFamily: {
                farsi: ['Vazir'],
            },
        },
    },
    variants: {
        float: ['responsive', 'direction'],
        margin: ['responsive', 'direction'],
        padding: ['responsive', 'direction'],
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
        require('tailwindcss-logical'),
        require('tailwindcss-dir')(),
    ],
};
