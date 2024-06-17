<template>
  <div id="app">
    <Header v-if="isLoggedIn" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapState(["isLoggedIn"]),
  },
};
</script>
