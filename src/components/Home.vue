<template>
    <v-container>
        <v-row>
            <router-link to="/search">検索へ</router-link>
        </v-row>
        <v-row class="text-center">
            <v-col cols="12">
                みんなの好きな作品
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                {{ clickItem.title }}
            </v-col>
        </v-row>
         <v-row v-if="ready">
            <v-col v-for="movie in movies" :key="movie.id">
               <card-template
               class="d-flex"
               :oneMovie="movie"
               :poster_path="movie.poster_path"
               :title="movie.title" 
               :release_date="movie.release_date" 
               :overview="movie.overview">
               </card-template>
            </v-col>
        </v-row>


        
        <!-- <v-row v-if="ready">
            <v-col v-for="movie in movies" :key="movie.id">
                 <v-card 
                 @click="getItem(movie)"
                 class="d-flex"
                 >
                    <div>
                      <v-img v-bind:src="'http://image.tmdb.org/t/p/w154/' + movie.poster_path"></v-img>
                    </div>
                    <div>
                        <card-template :title="movie.title" :release_date="movie.release_date" :overview="movie.overview" />
                    </div>
                </v-card>
            </v-col>
        </v-row> -->
    </v-container>
</template>

<script>
import axios from 'axios'
import CardTemplate from './CardTemplate.vue'
export default {
    name: 'Home',
    components: {
        'card-template': CardTemplate,
    },
    data() {
        return {
            movies: [],
            clickItem: [],
            apiKey: 'a1a357b8cd4732e4d9c84ecc9a1d7406',
            ready: false,
        }
    },
    methods: {
        getMovies() {
            // &language=ja
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`)
            .then(response => {
                this.movies = response.data.results
                console.log(this.movies);
                this.ready = true;
            })
            console.log(this.movies);
        },
         getItem(movie) {
             this.clickItem = movie;
        console.log('押した' + movie.title);
    }
    },
    created() {
        this.getMovies();
    },
}
</script>

<style scoped>
.v-image__image--cover {
    background-size: contain;
}
.red {
  background-color: red;
}
</style>