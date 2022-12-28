// import { createStore } from "store";

import { defineStore } from "pinia";
import axios from "axios";

// export default createStore({
//   state: {},

//   actions: {},
// });

export const useStore = defineStore("main", {
  state: () => ({
    name: "Mashael",
    // currentPath: window.location.hash,
    path: [],
  }),

  actions: {
    async getdata(currentPath) {
      // let result = await axios.get("http://localhost:3000/SideBar");
      console.log(currentPath);
      this.path = currentPath.split("/");
      this.path = this.path[2];
      console.log(this.path);
    },
  },
});
