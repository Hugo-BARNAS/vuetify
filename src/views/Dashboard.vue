<template>
  <div class="dashboard">
    <v-container class="my-5">
  
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              color="grey"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon small left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort project by project</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              color="grey"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon small left>mdi-account</v-icon>
              <span class="caption text-lowercase">By person name</span>
            </v-btn>
          </template>
          <span>Sort by project by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title" link>
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="text-end mr-10" id="chips-container">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a website",
          person: "Hugo BARNAS",
          due: "1st Jan 2020",
          status: "ongoing",
          content:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        },
        {
          title: "Code up the homepage",
          person: "Hugo BARNAS",
          due: "10th Jan 2020",
          status: "complete",
          content:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        },
        {
          title: "Design video thumbnails",
          person: "Chun li",
          due: "1st Jan 2020",
          status: "complete",
          content:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        },
        {
          title: "Create a communauty forum",
          person: "Margaux",
          due: "20th oct 2020",
          status: "overdue",
          content:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        },
      ],
      method: {
        sortBy(prop) {
          this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
        },
      },
    };
  },
};
</script>
<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

#chips-container .v-chip.complete {
  background: #3cd1c2;
}
#chips-container .v-chip.ongoing {
  background: #ffaa2c;
}
#chips-container .v-chip.overdue {
  background: #f83e70;
}
</style>
