<template>
    <div class="col-sm-8 col-offset-2">
        <button class="btn btn-xs btn-primary" @click="getVegetal(details.id - 1)">Précédent</button>
        <small>{{ details.id }} / {{ quantite }}</small>
        <button class="btn btn-xs btn-primary" @click="getVegetal(details.id + 1)">Suivant</button>
        <div class="input-group" v-if="!ajax">
           <h1>Nom commun : {{ details.nom_commun }}</h1>
            <p><strong>Espèce : </strong>{{ details.espece }}</p>
            <p><strong>Cultivar : </strong>{{ details.cultivar }}</p>
            <p><strong>Genre : </strong>{{ details.genre }}</p>
            <p><strong>Code : </strong>{{ details.code_de_la_plante }}</p>
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
                quantite: '',
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
                    this.details = data;
                })
                .error((err) => console.log(err));
                this.$http
                    .get('https://gardenbook.herokuapp.com/api/autocomplete', (data) => {
                        this.quantite = data.length;
                        this.ajax = false;
                    })
        },
        methods: {
            getVegetal(id) {
                this.ajax = true;
                if (id <= 1) {id = 1}
                if (id >= this.resultats) {id = this.resultats}
                this.$http
                    .get('https://gardenbook.herokuapp.com/api/vegetaux/' + id, (data) => {
                        this.details = data;
                        this.ajax = false;
                    })
                    .error((err) => console.log(err))

            }
        }
    }
</script>