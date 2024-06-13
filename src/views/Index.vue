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
        <h1 class="intro pt-5 mt-5 pe-5">
          Experience the joy of<br />
          finding your perfect home<br />
          here in Butuan.
        </h1>
        <router-link to="/login" class="btn btn-outline-light btn-lg mt-2"
          >Get Started</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      videoUrl:
        "https://sqgjbbugvuoetuwzfzfg.supabase.co/storage/v1/object/public/video/public/BUTUAN_Cinematic_Video.mp4",
    };
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
  transform: translate(-50%, -50%) scale(1.1);
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

.content h1 {
  font-family: "Raleway", sans-serif;
}

.intro {
  font-size: 40px;
  font-weight: 700;
}

.btn-primary {
  margin-top: 20px;
}
</style>
