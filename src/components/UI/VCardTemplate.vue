<template>
 <v-card>
     <div>
        <v-img v-bind:src="'http://image.tmdb.org/t/p/w154/'" + poster_path></v-img>
    </div>
    <div>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ release_date }}</v-card-subtitle>
        <v-card-text>{{ overview }}</v-card-text>
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
    props: ['poster_path', 'title', 'release_date', 'overview'],
    
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