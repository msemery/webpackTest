import Vue from 'vue';

var app = new Vue({
    el: '#app',
    data: {
      message: '',
      strongTag: '<strong>Important!</strong>'
//Vue n'interprète pas le html
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

