<template>
    <div class="col-sm-6 col-offset-3">
        <h1>Les "Quotes" de Chuck Norris</h1>
        <button class="btn btn-primary" @click="getQuote()">Chercher</button>
        <div class="quote-area" v-if="quote">
            <h2><blockquote>{{ quote }}</blockquote></h2>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: ''
            }
        },
        methods: {
            getQuote() {
                this.$http
                    .get('http://localhost:3001/api/random-quote', (data) => {
                        this.quote = data;
                    })
                    .error((err) => console.log(err))

            }
        }
    }
</script>