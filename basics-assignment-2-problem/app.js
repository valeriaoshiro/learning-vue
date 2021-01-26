const app = Vue.createApp({
    data(){
        return {
            output1: '',
            output2: '',
            confirmedInput: ''
        }
    },
    methods: {
        alert(){
            alert("hello");
        },
        setOutput1(event){
            this.output1 = event.target.value;
        },
        setOutput2(event){
            this.output2 = event.target.value;
        },
        confirmInput(){
            this.confirmedInput = this.output2;
        }
    }
});

app.mount('#assignment');