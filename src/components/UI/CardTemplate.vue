<template>
    <v-card>
         <div>
        <v-img v-bind:src="posterImg" ></v-img>
    </div>
    <div>
        <v-card-title>{{ oneMovie.title }}</v-card-title>
        <v-card-subtitle>{{ oneMovie.release_date }}</v-card-subtitle>
        <v-card-text>{{ oneMovie.overview }}</v-card-text>
    </div>
    </v-card>
</template>

<script>
export default {
    props: [
        'oneMovie',
        ],
     data() {
        return {
            posterImg: `http://image.tmdb.org/t/p/w154/${this.oneMovie.poster_path}`,
            clickItem: [],
        }
    },
    methods: {
         getItem(movie) {
             this.clickItem = movie;
        console.log('押した' + movie.title);
         }
    },
    created() {
    }
}
</script>