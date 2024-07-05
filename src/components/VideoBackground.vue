<template>
  <div class="video-container" v-if="videoUrl">
    <video autoplay muted loop>
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoBackground",
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.video-container video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%) scale(1.3);
}
</style>
