const app = Vue.createApp({
    data(){
        return {
            count: 0
        }
    },
    computed: {
        showResult(){
            if(this.count < 37) return "Not there yet";
            else if(this.count > 37) return "Too much!";
            else return this.count
        }
    },
    methods: {
        add(num){
            this.count = this.count + num;
        }
    },
    watch: {
        count: function(value){
            setTimeout(() => {
                console.log("here");
                this.count = 0;
            }, 5000);
        }
    }
});

app.mount("#assignment");