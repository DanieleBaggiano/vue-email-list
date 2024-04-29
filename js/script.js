const { createApp } = Vue;

createApp({
    data() {
        return {
            email: []
        }
    },

    created() {
        this.generate();
    },

    methods: {
        generate: function () {
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        console.log(this.email);
                        this.email.push(response.data.response)
                    })
            }
        }
    }
}).mount("#app");