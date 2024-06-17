module.exports = {
    chainWebpack,
    css: {
      loaderOptions: {
        postcss: {
          ident: 'postcss',
          plugins: [require('tailwindcss')],
        },
      },
    },
  };