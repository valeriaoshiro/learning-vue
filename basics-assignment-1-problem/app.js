const app = Vue.createApp({
    data(){
        return {
            name: 'V',
            age: 33,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/440px-Labrador_on_Quantock_%282175262184%29.jpg'
        };
    },
    methods: {
        randomNumber(){
            return Math.random();
        }
    }
});

app.mount('#assignment');