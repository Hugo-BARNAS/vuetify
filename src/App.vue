<template>
  <v-app style="background: #F5F5F5">
    <Navbar />
     <v-content class="mx-4 mb-4">
       <router-view />
     </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  },

  data: () => ({

  })
};
</script>
