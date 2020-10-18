<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-main>
      <router-view></router-view>
      <!-- <Home/> -->
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
  },

  data: () => ({
    //
  }),
};
</script>
