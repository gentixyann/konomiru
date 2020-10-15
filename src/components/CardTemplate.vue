<template>
    <v-card>
         <div>
        <v-img v-bind:src="posterImg" ></v-img>
    </div>
    <div>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ release_date }}</v-card-subtitle>
        <v-card-text>{{ overview }}</v-card-text>
    </div>
    </v-card>
</template>

<script>
export default {
    props: ['oneMovie', 'poster_path', 'title', 'release_date', 'overview'],
     data() {
        return {
            posterImg: `http://image.tmdb.org/t/p/w154/${this.poster_path}`,
        }
    },
    created() {
        console.log(this.oneMovie);
    }
    // 型付けする場合
    // props: [{
    //     title: {
    //         type: String
    //     },
    //     release_date: {
    //         type: Number
    //     },
    //     overview: {
    //         type: Array
    //     }
    // }],
}
</script>