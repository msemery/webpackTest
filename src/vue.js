import Vue from 'vue';

let app = new Vue ({
    el : '#app',
    data: {
        message: 'Bonjour Vue'
    },
    methods: {
        reverseTitle: function() {
            this.message = this.message.split('').reverse('').join('')
        }
    }

})