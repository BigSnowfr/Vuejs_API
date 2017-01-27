<template>
        <h1>Infos sur un film</h1>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Chercher un film..." v-model="name">
            <span class="input-group-btn">
                <button class="btn btn-primary" type="button" @click="getMovie()">Go!</button>
            </span>
        </div>
        <br>
                <div class="quote-area" v-if="film">
                    <div class="col-md-8">
                        <h1>{{ film.Title }}</h1><br>
                        {{ film.Year }}<br>
                        {{ film.Rated }}<br>
                        {{ film.Released }}<br>
                        {{ film.Runtime }}<br>
                        {{ film.Genre }}<br>
                        {{ film.Director }}<br>
                        {{ film.Writer }}<br>
                        {{ film.Actors }}<br>
                        <i>{{ film.Plot }}</i><br>
                        {{ film.Language }}<br>
                        {{ film.Country }}<br>
                        {{ film.Awards }}<br>
                        {{ film.Metascore }}<br>
                        {{ film.imdbRating }} / 10<br>
                        {{ film.imdbVotes }}<br>
                        {{ film.Type }}<br>
                    </div>
                    <div class="col-md-4">
                        <img v-bind:src="film.Poster" alt="">
                    </div>
                </div>
                <div class="pastrouve" v-else>
                    <strong>Aucun film trouvé</strong>
                </div>
</template>

<script>
    export default {
        data() {
            return {
                film: '',
                name: ''
            }
        },
        methods: {
            getMovie() {
                this.$http
                    .get('http://www.omdbapi.com/?t=' + this.name + '&y=&plot=short&r=json', (data) => {
                        this.film = data;
                        console.log(data)
                    })
                    .error((err) => console.log(err))

            }
        }
    }
</script>