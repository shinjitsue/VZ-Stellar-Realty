// Code to create a Vuex store with state, mutations, and actions to manage the user's authentication status
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    role: null,
    isLoggedIn: false,
    results: [],
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setRefreshToken(state, token) {
      state.refreshToken = token;
    },
    setRole(state, role) {
      state.role = role;
    },
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setResults(state, results) {
      state.results = results;
    },
  },
  actions: {
    updateResults({ commit }, results) {
      commit("setResults", results);
    },
  },
  getters: {
    getResults: (state) => state.results,
  },
  plugins: [createPersistedState()],
});

export default store;
