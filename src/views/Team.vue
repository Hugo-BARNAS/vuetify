<template>
  <div class="home">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap> 
        <v-flex xs12 sm6 md4 m4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-sm-center ma-3">
              <v-responsive class="pt-4">
                images goes
              </v-responsive>
              <v-card-text>
                <div class="subtitle-2">
                  {{person.name}}
                </div>
                <div class="grey--text">
                  {{person.role}}
                </div> 
              </v-card-text>
              <v-card-actions>
                <v-btn depressed >
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
        { name: "Hugo BARNAS", role: "Web devlopper" },
        { name: "Cecile Delgnault", role: "UX Project Manager" },
        { name: "Stephanie Michelon", role: "UI" },
        { name: "Mickael Ribeiro", role: "Project Manager" },
      ],
    };
  },
};
</script>
