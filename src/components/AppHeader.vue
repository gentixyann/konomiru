<template>
 <header>
      <v-app-bar app dark>

        <div class="d-flex align-center">
          <v-img
               alt="Vuetify Logo"
               class="shrink mr-2"
               contain
               src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
               transition="scale-transition"
               width="40"
          />
          <v-img
               alt="Vuetify Name"
               class="shrink mt-1 hidden-sm-and-down"
               contain
               min-width="100"
               src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
               width="100"
          />
          <v-toolbar-title>
               このみる
          </v-toolbar-title>
        
      </div>
          <v-btn class="ma-2" outlined>
               ログイン/登録
          </v-btn>
      </v-app-bar>
 </header>
</template>