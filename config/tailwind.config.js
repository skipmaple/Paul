const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './app/helpers/**/*.rb',
        './app/javascript/**/*.js',
        './app/views/**/*.{erb,haml,html,slim}'
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'green': {
                100: '#E8F6F1',
                200: '#BFECDB',
                300: '#96E2C5',
                400: '#56BE96',
                500: '#40C391',
                600: '#169A67',
            },
            'orange': {
                100: '#FFF8F2',
                200: '#FFE3CD',
                300: '#FFCEA8',
                400: '#E6975B',
                500: '#FFA866',
                600: '#CC600D',
            },
            'red': {
                100: '#FEEFEF',
                200: '#FFCECE',
                300: '#FFACAC',
                400: '#E56F6F',
                500: '#FA6767',
                600: '#CB3131',
            },
        },
        fontFamily: {
            sans: ['"Open Sans"', 'sans-serif'],
            heading: ['Poppins', 'sans-serif']
        },
        fontSize: {
            sm: ['12.8px', {
                lineHeight: '16px',
            }],
            base: ['16px', {
                lineHeight: '24px',
            }],
            lg: ['20px', {
                lineHeight: '32px',
            }],
        },
        extend: {
            colors: {
                'primary': {
                    100: '#F0F6FF',
                    200: '#BAD6FA',
                    300: '#83B6F5',
                    400: '#4791EC',
                    500: '#2084FF',
                    600: '#0B6CE3',
                    transparent: 'rgba(32, 132, 255, 0.35)',
                    gradient: 'linear-gradient(180deg, #0B6CE3 0%, #4791EC 100%)',
                    light_gradient: 'linear-gradient(157.42deg, rgba(240, 246, 255, 0.7) 4.94%, rgba(240, 246, 255, 0) 68.33%)',
                    light_gradient_2: 'linear-gradient(157.42deg, rgba(240, 246, 255, 0.2) 4.94%, rgba(240, 246, 255, 0) 68.33%)',
                },
                'green': {
                    transparent: 'rgba(64, 195, 145, 0.35)',
                    gradient: 'linear-gradient(180deg, #169A67 0%, #56BE96 100%)',
                },
                'orange': {
                    transparent: 'rgba(255, 168, 102, 0.35)',
                    gradient: 'linear-gradient(180deg, #CC600D 0%, #E6975B 100%)',
                },
                'red': {
                    transparent: 'rgba(250, 103, 103, 0.35)',
                    gradient: 'linear-gradient(180deg, #CB3131 0%, #E56F6F 100%)',
                },
                'dark': {
                    100: '#9F9FAB',
                    200: '#7A7A8A',
                    300: '#545569',
                    400: '#313244',
                    500: '#222433',
                    600: '#0D0F1F',
                    transparent_300: 'rgba(84, 85, 105, 0.4)',
                    transparent_200: 'rgba(122, 122, 138, 0.2)',
                    gradient: 'linear-gradient(180deg, rgba(34, 36, 51, 0) 0%, rgba(13, 15, 31, 0.6) 100%)',
                },
                'light': {
                    100: '#FFFFFF',
                    200: '#F2F3F6',
                    300: '#E4E7EC',
                    400: '#D7DAE3',
                    500: '#E6E9F0',
                    600: '#CACED9',
                    transparent_300: 'rgba(228, 231, 236, 0.4)',
                    transparent_200: 'rgba(242, 243, 246, 0.4)',
                    gradient: 'linear-gradient(268.13deg, #FFFFFF 7.44%, rgba(255, 255, 255, 0.2) 115.42%)',
                },
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ]
}
