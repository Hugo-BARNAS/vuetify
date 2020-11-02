<template>
  <nav>
    <v-toolbar flat app style="background: #F5F5F5">
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

    <v-navigation-drawer absolute temporary v-model="drawer" class="primary">
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        { title: "My Projects", icon: "mdi-folder", route: "/projects" },
        { title: "Team", icon: "mdi-account-multiple", route: "/team" },
      ],
    };
  },
};
</script>

<style scoped>

</style>
