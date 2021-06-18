<template>
  <v-app class="top">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
::v-deep .v-application--wrap {
  display: flex;
  justify-content: center;
}
</style>
