const App = {
    data(){
        return {
            placeholderString: 'Введите название ',
            title: 'Текст',
            inputValue: ''
        }
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value
        }
    }
}

Vue.createApp(App).mount('#app')

