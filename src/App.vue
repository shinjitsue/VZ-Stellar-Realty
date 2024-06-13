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

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      isLoggedIn: false, // change this to true when the user logs in
    };
  },
};
</script>
