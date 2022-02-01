const defaultTheme = require('tailwindcss/defaultTheme');
const colors =  require('tailwindcss/colors');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                'gray-background' : '#f7f8fc',
                gray:colors.neutral,
                'blue': '#328af1',
                'blue-hover':'#2879bd',
                'yellow':'#ffc73c',
                'purple':'#8b60ed',
                'red':'#ec454'
            },
            maxWidth: {
                custom: '62.5rem'
            },
            spacing: {
                70:'17.5rem',
                175:'43.75rem'
            }  
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
