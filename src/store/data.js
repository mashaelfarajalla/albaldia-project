import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useStore = defineStore("main", {
  state: () => ({
    route: useRoute(),
  }),
  actions: {
    getdata: async (state) => {
      console.log(state.route);
    },
  },
});
