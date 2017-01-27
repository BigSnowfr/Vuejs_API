<template>
    <div class="col-sm-6 col-offset-3">
        <h1>Nos végétaux</h1>
        <button class="btn btn-primary" @click="getVegetal()">Chercher</button>
        <div class="quote-area" v-if="vegetaux">
            <table class="table">
                <thead>
                <tr>
                    <td>Code de la plante</td>
                    <td>Genre</td>
                    <td>Espèce</td>
                    <td>Cultivar</td>
                    <td>Nom commun</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{{ vegetaux.code_de_la_plante }}</td>
                    <td>{{ vegetaux.genre }}</td>
                    <td>{{ vegetaux.espece }}</td>
                    <td>{{ vegetaux.cultivar }}</td>
                    <td>{{ vegetaux.nom_commun }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                vegetaux: ''
            }
        },
        methods: {
            getVegetal() {
                let id = Math.floor(Math.random() * 500) + 1;
                this.$http
                    .get('https://gardenbook.herokuapp.com/api/vegetaux/' + id, (data) => {
                        this.vegetaux = data;
                        console.log(data)
                    })
                    .error((err) => console.log(err))

            }
        }
    }
</script>