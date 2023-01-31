import { defineStore } from "pinia";

export const useStore = defineStore("detailsdata", {
  state: () => ({
    path: [],
    datadetails: [],
    pathid: [],
    datasercction: [],
  }),
  actions: {
    getdata(item) {
      this.pathid = item;
      console.log(item);
    },

    async getdata2(item) {
      this.datasercction = await item;
      console.log(item);
    },
  },
});
