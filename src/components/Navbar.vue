<template>
  <nav>
     <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
      :timeout="4000" 
      top color="cyan lighten-2"
      class="white--text"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          CLOSE
        </v-btn>
      </template>
    </v-snackbar>

    <v-app-bar 
    flat 
    app 
    style="background: #F5F5F5">
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-bold">Hugo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="grey" v-bind="attrs" v-on="on">
            <v-icon left>mdi-menu-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.route"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text class="ma-2">
        <span class="grey--text">Sign Out</span>
        <v-icon right color="grey">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer absolute temporary v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="alt" />
          </v-avatar>
          <p class="white--text subtitle-1 mt-1">Hugo BARNAS</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list dense nav>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.route"
        >
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
import Popup from "./Popup";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      multiLine: true,
      snackbar: false,
      text: `Project added.`,
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

<style scoped></style>
