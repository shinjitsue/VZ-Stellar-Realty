// Code to create a Vuex store with state, mutations, and actions to manage the user's authentication status
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    role: null,
    isLoggedIn: false,
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
  },
  plugins: [createPersistedState()],
});

export default store;
