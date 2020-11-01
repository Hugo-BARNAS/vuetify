<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-bold">Hugo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="ma-2">
        <span class="grey--text">Sign Out</span>
        <v-icon right color="grey">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app temporary absolute bottom v-model="drawer" class="primary">
      <p class='success'>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
