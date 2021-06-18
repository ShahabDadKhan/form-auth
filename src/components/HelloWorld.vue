<template>
  <v-sheet>
    <v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      absolute
      color="deep-purple accent-4"
      dark
      scroll-target="#scrolling-techniques-6"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Login to see what's behind the page</v-toolbar-title>

      <v-spacer></v-spacer>

      <the-dialog />

      <v-checkbox
        v-model="collapseOnScroll"
        color="white"
        hide-details
      ></v-checkbox>
    </v-app-bar>
    <!-- <v-sheet
      id="scrolling-techniques-6"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet> -->
  </v-sheet>
</template>

<script>
import TheDialog from "./TheDialog.vue";
export default {
  components: { TheDialog },
  data: () => ({
    collapseOnScroll: true,
  }),
};
</script>
