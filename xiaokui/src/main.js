// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

let url = '/static/progress.json'

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App :db="db"/>',
  components: { App },
  data: {
    db: null
  },
  created () {
    let that = this

    axios.get(url)
    .then(function (response) {
      that.db = response.data

      // console.log(that.db)
    })
  }
})
