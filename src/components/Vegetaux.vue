<template>
    <div class="col-sm-6 col-offset-3">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Chercher un végétal..." v-model="terme">
            <span class="input-group-btn">
                <button class="btn btn-primary" type="button" @click="getVegetalByNameSearch()"><span v-if="!ajax">Go! </span><img src="/public/img/loading.svg" height="20px" alt="" v-if="ajax"></button>
            </span>
        </div>
        <button class="btn btn-primary" @click="getVegetal()">Chercher une plante random</button>
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
        <div class="search" v-if="resultats">
            <h3>Résultats de la recherche</h3>
            <ul v-for="resultat in resultats">
                <li><button @click="getVegetalByName(resultat)">{{ resultat }}</button></li>
            </ul>
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
                ajax: false
            }
        },
        methods: {
            getVegetal() {
                this.ajax = true;
                let id = Math.floor(Math.random() * 500) + 1;
                this.$http
                    .get('https://gardenbook.herokuapp.com/api/vegetaux/' + id, (data) => {
                        this.vegetaux = data;
                        console.log(data);
                        this.ajax = false;
                    })
                    .error((err) => console.log(err))

            },
            getVegetalByNameSearch() {
                this.ajax = true;
                this.$http
                    .get('https://gardenbook.herokuapp.com/api/autocomplete?term=' + this.terme, (data) => {
                        this.resultats = data;
                        console.log(data);
                        this.ajax = false;
                    })
                    .error((err) => console.log(err))
            },
            getVegetalByName(plante) {
                this.ajax = true;
                this.$http
                    .get('https://gardenbook.herokuapp.com/api/vegetaux/nom/' + plante, (data) => {
                        this.resultats = data;
                        console.log(data);
                        this.ajax = false;
                        this.$route.router.go(this.resultats.id);
                    })
                    .error((err) => console.log(err))
            }
        }
    }
</script>