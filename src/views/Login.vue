<template>
  <div class="login-page">
    <VideoBackground :videoUrl="videoUrl" />
    <div
      class="container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-lg-7 col-md-7 form-right d-none d-md-flex justify-content-center align-items-center"
          >
            <div class="container">
              <div class="px-5 my-5 color-heading">
                <h3>Welcome.</h3>
                <small class="mt-3">
                  Discover and manage properties with ease. Our platform
                  provides you with the tools to find your dream home or list
                  properties effortlessly. Experience seamless property
                  management and exceptional service.
                </small>
              </div>
            </div>
          </div>
          <form
            @submit.prevent="login"
            class="col-lg-5 col-md-5 p-5 form-left rounded-lg rounded-md-0"
            id="login"
          >
            <div class="text-center pb-3">
              <img src="../assets/logo.png" alt="" />
            </div>

            <h3 class="pb-2">Login</h3>
            <div class="mb-3">
              <label for="email" class="form-label fw-light fs-6">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="username@gmail.com"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label fw-light fs-6"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="text-decoration-none forgot-pass mb-3">
              <a href=""><p class="fw-light fs-6">Forgot Password?</p></a>
            </div>
            <div class="d-grid pb-2">
              <button
                type="submit"
                class="btn btn-1 py-2"
                :disabled="isLoading"
                v-if="!isLoading"
              >
                Login
              </button>
              <button type="button" class="btn btn-1 py-2" disabled v-else>
                <span
                  class="spinner-grow spinner-grow-sm"
                  aria-hidden="true"
                ></span>
                <span role="status"> Loading...</span>
              </button>
            </div>
            <div class="signup text-center fw-light">
              <small
                >Don't have an account yet?
                <a href="" class="fw-bold">Signup</a></small
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "../../src/services/supabase";
import VideoBackground from "@/components/VideoBackground.vue";

export default {
  name: "Login",
  components: {
    VideoBackground,
  },
  data() {
    return {
      videoUrl:
        "https://sqgjbbugvuoetuwzfzfg.supabase.co/storage/v1/object/public/video/public/BUTUAN_Cinematic_Video.mp4",
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    async login() {
      this.isLoading = true;

      try {
        let { data, error } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password,
        });

        if (error) {
          throw new Error("Invalid email or password. Please try again.");
        }

        let session = data.session;
        let user = data.user;

        // store access token and refresh token in vuex
        if (session != null) {
          this.$store.commit("setAccessToken", session.access_token);
          this.$store.commit("setRefreshToken", session.refresh_token);

          let { data: user_info, error } = await supabase
            .from("user_info")
            .select("role")
            .eq("user_id", user.id);

          if (user_info.length > 0) {
            // store user role in vuex
            this.$store.commit("setRole", user_info[0].role);
          } else {
            console.log("No user info found for this user");
          }

          // if the user is logged in, set the isLoggedIn state to true
          this.$store.commit("setLoggedIn", true);
        }
        this.$toastr.success("Login successful!");

        // Redirect to home page
        this.$router.push({ name: "home" });
      } catch (error) {
        this.$toastr.error(error.message);
      } finally {
        this.isLoading = false;
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>

<style scoped>
.login-page {
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
  transform: translate(-50%, -50%) scale(1.3);
}

.container-fluid {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.form-right {
  border-radius: 16px 0px 0px 16px;
  background-color: #191a36;
  color: #e3e3e3;
}

.form-left {
  /* From https://css.glass */
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  color: white;
}

.form-left img {
  width: 200px;
}

.text-center.img-logo img {
  width: 350px;
}

.forgot-pass.text-decoration-none a {
  text-decoration: none; /* Removes the underline */
  color: inherit;
}

.btn.btn-1 {
  background-color: #dfad03;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 6px;
}

.signup {
  font-size: 14px;
}

.signup small a {
  text-decoration: none;
  color: #191a36;
}

.color-heading h3 {
  color: #dfad03;
  text-shadow: rgba(223, 172, 3, 0.7) 0px 0px 45px;
}

button {
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid #dfad03;
  font-size: 14px;
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

/* Add media query for larger screens */
@media (min-width: 768px) {
  .form-left {
    border-radius: 0 16px 16px 0;
  }
}
</style>
