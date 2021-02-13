const app = Vue.createApp({
    data(){
        return {
            input: '',
            input2: '',
            visible: true
        }
    },
    computed: {
        classProperty(){
            let styles = {};

            if(this.input === 'user1') styles['user1'] = true;
            else if(this.input === 'user2') styles['user2'] = true;

            if(this.visible) styles['visible'] = true;
            else styles['hidden'] = true;

            return styles;
        }
    },
    methods: {
        toggleVisibility(){
            this.visible = !this.visible;
        }
    }
});

app.mount("#assignment");