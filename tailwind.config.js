module.exports = {
    theme: {
        extend: {
            fontFamily: {
                body: 'var(--font-body)',
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
