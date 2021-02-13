const app = Vue.createApp({
    data(){
        return {
            input: '',
            tasks: [],
            showTasks: true
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.input);
            this.input = '';
        },
        toggleTasks(){
            this.showTasks = !this.showTasks;
        }
    }
});

app.mount("#assignment");