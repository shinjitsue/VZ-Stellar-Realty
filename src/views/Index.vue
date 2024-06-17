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
          finding your <span>perfect home</span><br />
          here in Butuan.
        </h1>
        <button @click="navigateToLogin" class="mt-2">Get Started</button>
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
  methods: {
    navigateToLogin() {
      this.$router.push("/login");
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
  transform: translate(-50%, -50%) scale(1.2);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
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

.intro span {
  color: #dfad03;
  font-size: 40px;
  font-weight: 700;
  text-shadow: rgba(223, 172, 3, 0.7) 0px 0px 45px;
}

.btn-primary {
  margin-top: 20px;
}

button {
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid #dfad03;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

button:hover {
  background: #dfad03;
  box-shadow: 0 0 30px 5px #dfac03d5;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

button:hover::before {
  -webkit-animation: sh02 0.5s 0s linear;
  -moz-animation: sh02 0.5s 0s linear;
  animation: sh02 0.5s 0s linear;
}

button::before {
  content: "";
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: #fff;
  box-shadow: 0 0 50px 30px #fff;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}

button:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}
</style>
