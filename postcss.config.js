module.exports = ({ env, options: { map } }) => ({
  map: env === 'production' && map,

  plugins: {
    'postcss-preset-env': {
      features: {
        'nesting-rules': {},
      },

      autoprefixer: env === 'production',
    },

    cssnano: env === 'production',
  },
});
