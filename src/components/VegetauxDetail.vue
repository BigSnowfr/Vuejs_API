<template>
    <div class="col-sm-6 col-offset-3">
        <div class="input-group" v-if="!ajax">
           <h1>Details : {{ details.nom_commun }}</h1>
        </div>
        <div v-if="ajax">
            <img src="/public/img/loading.svg" alt="" height="70">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                vegetaux: '',
                terme: '',
                resultats: '',
                details: '',
                ajax: true
            }
        },
        created: function () {
            this.ajax = true;
            this.resultats = '';
            this.$http
                .get('https://gardenbook.herokuapp.com/api/vegetaux/' + this.$route.params.id, (data) => {
                    this.ajax = false;
                    this.details = data;
                    console.log(data);
                })
                .error((err) => console.log(err))
        }
    }
</script>