module.exports = {
    theme: {
        extend: {
            fontFamily: {
                farsi: ['Vazir'],
            },
        },
    },
    // Recomended order: ['responsive', 'group-hover', 'focus-within', 'first',
    //                    'last', 'odd', 'even', 'hover', 'focus', 'active',
    //                    'visited', 'disabled']
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
