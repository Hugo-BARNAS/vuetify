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
          <v-form class="px-3"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              name="Title"
              label="Title"
              id="id"
              v-model="title"
              :counter="50"
              :rules="titleRules"
              prepend-icon="mdi-folder"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              :rules="contentRules"
              :counter="50"
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
            :disabled="!valid"
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
import db from '@/fb'
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content:"",
      due: "",
      valid: true,
      titleRules: [
        v => !!v || 'A title is required', 
        v => (v && v.length >= 3) || 'Minimum length is characters'
      ],
      
      contentRules: [
        v => !!v || 'Info is required',
         v => (v && v.length >= 3) || 'Minimum length is characters'
      ],
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()){
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), 'do MMM yyyy'),
          person: 'Hugo BARNAS',
          status: 'ongoing'
        }
        db.collection('projects').add(project).then(() => console.log("added to db!"))
      }
    },
  },
  computed: {
      formattedDate(){
          return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
      }
  }
};
</script>
