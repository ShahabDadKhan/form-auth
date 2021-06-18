import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      dialog: true,
    };
  },
  mutations: {
    openDialog(state) {
      state.dialog = !state.dialog;
    },
  },
  actions: {},
  modules: {},
  getters: {
    theDialog: (state) => state.dialog,
  },
});
