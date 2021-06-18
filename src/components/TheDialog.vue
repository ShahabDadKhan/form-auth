<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click="openTheDialog">
      Login
    </v-btn>

    <v-dialog v-model="dialog" max-width="40%">
      <v-card>
        <v-card-title class="text-h5">
          Enter your name and email
        </v-card-title>

        <v-card-text>
          <home />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="openTheDialog">
            Login
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Home from "../views/Home.vue";

export default {
  components: { Home },
  data() {
    return {
      dialog: this.$store.dialog,
    };
  },
  methods: {
    openTheDialog() {
      this.$store.dispatch("theDialog");
      console.log(this.dialog);
    },
  },
};
</script>
