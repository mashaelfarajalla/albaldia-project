import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useStore = defineStore("main", {
  state: () => ({
    route: useRoute(),
    path: [],
    sidebar: [],
    indexhome: [],
    show: true,
    active: false,
    name: "",
  }),

  actions: {
    getdata: async (state) => {
      // console.log(state.route.fullPath);
      // state.path = state.route.fullPath.split("/");
      // state.path = state.path[2];
      // console.log(state.path);
      // let result = await axios.get("http://localhost:3000/SideBar");
      // state.sidebar = result.data[0].index;
      // console.log(state.sidebar);
    },
  },
});
