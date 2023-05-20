'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://dev.orphic.co/api"',
  PK: '""',
  STRIPE_ACCOUNT: '""',
  APP_VERSION: '""',
  LOCALE: '""'
})
