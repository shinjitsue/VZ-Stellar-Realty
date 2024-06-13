<template>
  <div class="index-page">
    <div class="video-container" v-if="videoUrl">
      <video autoplay muted loop>
        <source :src="videoUrl" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="overlay">
      <div class="content mt-5">
        <h1 class="pt-5 mt-5 pe-5">
          Experience the joy <br />
          of finding your perfect
          <br />home.
        </h1>
        <router-link to="/login" class="btn btn-primary">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      videoUrl: "",
    };
  },
  async mounted() {
    await this.fetchVideoUrl();
  },
  methods: {
    async fetchVideoUrl() {
      const { data, error } = await this.$supabase
        .from("videos")
        .select("url")
        .eq("id", 1)
        .single();
      if (error) {
        console.error(error);
      } else {
        this.videoUrl = data.url;
      }
    },
  },
};
</script>

<style scoped>
.index-page {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  color: white;
}

.btn-primary {
  margin-top: 20px;
}
</style>
