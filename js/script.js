const { createApp } = Vue;

createApp({
    data() {
        return {
            email: [],
            isLoading: false
        }
    },

    created() {
        this.generate();
    },

    methods: {
        generate: function () {
            this.isLoading = true;
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        console.log(this.email);
                        this.email.push(response.data.response)
                        this.isLoading = false
                    })
            }
        }
    }
}).mount("#app");