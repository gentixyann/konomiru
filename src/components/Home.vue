<template>
    <v-container>
        <v-row>
            <v-col v-for="movie in movies" :key="movie.id">
                <v-card>
                    <v-img v-bind:src="'http://image.tmdb.org/t/p/w300/' + movie.poster_path"></v-img>
                    <v-card-title>{{ movie.title }}</v-card-title>
                    <v-card-subtitle>{{ movie.release_date }}</v-card-subtitle>
                    <v-card-text>{{ movie.overview }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    data() {
        return {
            movies: [],
            apiKey: 'a1a357b8cd4732e4d9c84ecc9a1d7406',
        }
    },
    methods: {
        getMovies() {
            // &language=ja
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`)
            .then(response => {
                this.movies = response.data.results
                console.log(this.movies);
            })
            console.log(this.movies);

        },
    },
    created() {
        this.getMovies();
    }
}
</script>