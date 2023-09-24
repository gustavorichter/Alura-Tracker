module.exports = {
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // Desabilite a minificação do Terser
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.options && minimizer.options.terserOptions) {
          minimizer.options.terserOptions.compress = false;
        }
      });
    }
  },
};
