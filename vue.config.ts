module.exports = {
   configureWebpack: {
      plugins: [
         require('unplugin-auto-import/webpack')({}),
      ],
   },
}