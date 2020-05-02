module.exports = {
    purge: false,
    theme: {
        extend: {
            fontFamily: {
                body: 'var(--font-body)',
            },
            backgroundColor: {
                body: 'var(--color-bg-body)',
                nav: 'var(--color-bg-nav)',
            },
            textColor: {
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
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
