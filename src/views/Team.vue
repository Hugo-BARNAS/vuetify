<template>
  <div class="home">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 m4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-sm-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar
                size="100"
                class="grey lighten-2"
              >
                <img :src="person.avatar"
                >
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-2">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed>
                <v-icon small left color="grey">mdi-message</v-icon>
                <span class="grey--text">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Hugo BARNAS",
          role: "Web devlopper",
          avatar: '/avatar-1.png',
        },
        {
          name: "Cecile Delgnault",
          role: "UX Project Manager",
          avatar: '/avatar-2.png',
        },
        {
          name: "Stephanie Michelon",
          role: "UI",
          avatar: '/avatar-3.png',
        },
        {
          name: "Mickael Ribeiro",
          role: "Project Manager",
          avatar: '/avatar-4.png',
        },
        {
          name: "Francesca",
          role: "UX",
          avatar: '/avatar-5.png',
        },
      ],
    };
  },
};
</script>
