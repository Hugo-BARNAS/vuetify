<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Add a project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          <h2>Add a new project</h2>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field
              name="Title"
              label="Title"
              id="id"
              v-model="title"
              prepend-icon="mdi-folder"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
            ></v-textarea>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-bind="attrs"
                  v-on="on"
                  label="Due Date"
                  :value="formattedDate"
                  prepend-icon="mdi-calendar"
                ></v-text-field>
                 </template>
                <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="
              dialog = false;
              submit()"
          >
            Add a project
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: ""
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    },
  },
  computed: {
      formattedDate(){
          return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
      }
  }
};
</script>
