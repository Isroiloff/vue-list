import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    SET_ITEM: (state, items) => {
      state.items = items;
    },
  },
  actions: {
    getItems: ({ commit }) => {
      axios
        .get("https://apiallin.igenius.uz/api/site/news-page/news")
        .then((res) => {
          commit("SET_ITEM", res.data.data);
        });
    },
  },
  modules: {},
});
