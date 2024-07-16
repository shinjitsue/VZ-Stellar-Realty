<template>
  <di>
    <!-- Home Section -->
    <div id="home">
      <!-- Home Intro 1 -->
      <div
        id="introCarousel"
        class="carousel slide mt-5 pt-3"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/intro1.jfif"
              class="d-block w-100"
              style="object-fit: cover; height: 300px"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/intro2.jpg"
              class="d-block w-100"
              style="object-fit: cover; height: 300px"
              alt="..."
            />
          </div>
        </div>
      </div>
      <!-- End of Home Intro 1 -->

      <!-- Search Box -->
      <SearchBox />
      <!-- End of Search Box -->

      <!-- Home Intro 2  -->
      <div class="intro bg-body-tertiary px-5">
        <IntroductionBackground />
      </div>
      <!-- End of Home Intro 2 -->
    </div>
    <!-- End of Home Section -->

    <!-- Popular Section -->
    <div class="container-fluid">
      <div class="container" id="popular">
        <div class="row my-5 py-3">
          <h3 class="mb-4 pb-2 col-12 px-0">Popular Property</h3>
          <!-- Swiper -->
          <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper col-12"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }"
          >
            <swiper-slide class="swiper-slide">
              <div class="card pCard" style="width: 100%">
                <img
                  src="../assets/intro2.jpg"
                  class="card-img-top"
                  alt="Property Image"
                />
                <div class="card-body">
                  <span>Apartment • Lot: 21665 sqm</span> <br />
                  <h4 class="pt-1">₱250,000,000</h4>
                  <p class="text-secondary m-0 pb-1">
                    7 Bed | 7 Bath | For Rent
                  </p>
                  <small>Muntinlupa, Metro Manila</small>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="card pCard" style="width: 100%">
                <img
                  src="../assets/intro2.jpg"
                  class="card-img-top"
                  alt="Property Image"
                />
                <div class="card-body">
                  <span>Apartment • Lot: 21665 sqm</span> <br />
                  <h4 class="pt-1">₱250,000,000</h4>
                  <p class="text-secondary m-0 pb-1">
                    7 Bed | 7 Bath | For Rent
                  </p>
                  <small>Muntinlupa, Metro Manila</small>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="card pCard" style="width: 100%">
                <img
                  src="../assets/intro2.jpg"
                  class="card-img-top"
                  alt="Property Image"
                />
                <div class="card-body">
                  <span>Apartment • Lot: 21665 sqm</span> <br />
                  <h4 class="pt-1">₱250,000,000</h4>
                  <p class="text-secondary m-0 pb-1">
                    7 Bed | 7 Bath | For Rent
                  </p>
                  <small>Muntinlupa, Metro Manila</small>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <div class="card pCard" style="width: 100%">
                <img
                  src="../assets/intro2.jpg"
                  class="card-img-top"
                  alt="Property Image"
                />
                <div class="card-body">
                  <span>Apartment • Lot: 21665 sqm</span> <br />
                  <h4 class="pt-1">₱250,000,000</h4>
                  <p class="text-secondary m-0 pb-1">
                    7 Bed | 7 Bath | For Rent
                  </p>
                  <small>Muntinlupa, Metro Manila</small>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- End of Popular Section -->

    <!-- Listings Section -->
    <div class="container-fluid">
      <div class="container" id="listings">
        <h3 class="mb-4 pb-2 col-12">Recently Posted Listings</h3>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4">
            <div class="card lCard">
              <img
                src="../assets/intro2.jpg"
                class="card-img-top"
                alt="Property Image"
              />
              <div class="card-body">
                <span>Apartment • Lot: 21665 sqm</span> <br />
                <h4 class="pt-1">₱250,000,000</h4>
                <p class="text-secondary m-0 pb-1">7 Bed | 7 Bath | For Rent</p>
                <small>Muntinlupa, Metro Manila</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4">
            <div class="card lCard">
              <img
                src="../assets/intro2.jpg"
                class="card-img-top"
                alt="Property Image"
              />
              <div class="card-body">
                <span>Apartment • Lot: 21665 sqm</span> <br />
                <h4 class="pt-1">₱250,000,000</h4>
                <p class="text-secondary m-0 pb-1">7 Bed | 7 Bath | For Rent</p>
                <small>Muntinlupa, Metro Manila</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4">
            <div class="card lCard">
              <img
                src="../assets/intro2.jpg"
                class="card-img-top"
                alt="Property Image"
              />
              <div class="card-body">
                <span>Apartment • Lot: 21665 sqm</span> <br />
                <h4 class="pt-1">₱250,000,000</h4>
                <p class="text-secondary m-0 pb-1">7 Bed | 7 Bath | For Rent</p>
                <small>Muntinlupa, Metro Manila</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4">
            <div class="card lCard">
              <img
                src="../assets/intro2.jpg"
                class="card-img-top"
                alt="Property Image"
              />
              <div class="card-body">
                <span>Apartment • Lot: 21665 sqm</span> <br />
                <h4 class="pt-1">₱250,000,000</h4>
                <p class="text-secondary m-0 pb-1">7 Bed | 7 Bath | For Rent</p>
                <small>Muntinlupa, Metro Manila</small>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4">
            <div class="card lCard">
              <img
                src="../assets/intro2.jpg"
                class="card-img-top"
                alt="Property Image"
              />
              <div class="card-body">
                <span>Apartment • Lot: 21665 sqm</span> <br />
                <h4 class="pt-1">₱250,000,000</h4>
                <p class="text-secondary m-0 pb-1">7 Bed | 7 Bath | For Rent</p>
                <small>Muntinlupa, Metro Manila</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4">
            <div class="card lCard">
              <img
                src="../assets/intro2.jpg"
                class="card-img-top"
                alt="Property Image"
              />
              <div class="card-body">
                <span>Apartment • Lot: 21665 sqm</span> <br />
                <h4 class="pt-1">₱250,000,000</h4>
                <p class="text-secondary m-0 pb-1">7 Bed | 7 Bath | For Rent</p>
                <small>Muntinlupa, Metro Manila</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4">
            <div class="card lCard">
              <img
                src="../assets/intro2.jpg"
                class="card-img-top"
                alt="Property Image"
              />
              <div class="card-body">
                <span>Apartment • Lot: 21665 sqm</span> <br />
                <h4 class="pt-1">₱250,000,000</h4>
                <p class="text-secondary m-0 pb-1">7 Bed | 7 Bath | For Rent</p>
                <small>Muntinlupa, Metro Manila</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4">
            <div class="card lCard">
              <img
                src="../assets/intro2.jpg"
                class="card-img-top"
                alt="Property Image"
              />
              <div class="card-body">
                <span>Apartment • Lot: 21665 sqm</span> <br />
                <h4 class="pt-1">₱250,000,000</h4>
                <p class="text-secondary m-0 pb-1">7 Bed | 7 Bath | For Rent</p>
                <small>Muntinlupa, Metro Manila</small>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-3">
          <div class="col-12 d-flex justify-content-center">
            <button class="btn btn-2 btn-secondary">View all properties</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Listings Section -->

    <!-- About Section -->
    <div class="container-fluid">
      <div class="container" id="about">
        <div class="p-5"></div>
      </div>
    </div>
    <!-- End of About Section -->

    <Footer />

    <!-- Search Filter Modal -->
    <div
      class="modal fade"
      id="searchFilter"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="searchFilterLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-fullscreen-md-down modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header">
            <div class="navbar-brand">
              <img
                src="../assets/logo-nav.png"
                alt="Logo"
                width="128"
                height="32"
                class="d-inline-block align-text-top"
              />
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5>Offer Type</h5>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Search Filter Modal -->
  </di>
</template>

<script>
import IntroductionBackground from "@/components/IntroductionBackground.vue";
import SearchBox from "@/components/SearchBox.vue";
import Footer from "@/components/Footer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default {
  name: "Home",
  components: {
    SearchBox,
    IntroductionBackground,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const sections = ["home", "popular", "listings", "about"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          scrollPosition >= el.offsetTop &&
          scrollPosition <= el.offsetTop + el.offsetHeight
        ) {
          this.$emit("section-changed", section);
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
@import "swiper/swiper-bundle.css";

.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mySwiper :deep(.swiper-pagination-bullet-active) {
  background-color: #dfad03 !important;
}

.card {
  width: 100%;
  max-width: 400px;
}

.card.pCard {
  height: 410px;
}

.card.lCard {
  height: 390px;
}

.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card-img-top {
  object-fit: cover;
  height: 230px;
}

.bg-white {
  background-color: #fff;
}

.btn-2.btn-secondary {
  width: 300px;
  background-color: #ebf0f5;
  color: #191a36;
  font-weight: 500;
  border: none;
}

.btn-2.btn-secondary:hover {
  background-color: #dbe1e7; /* Darker shade for hover */
}

.btn-2.btn-secondary:active {
  color: #191a36;
}

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 145px 1rem 0;
  position: relative;
}

/* Adjustments for smaller screens */
@media screen and (max-width: 639px) {
  .search-container {
    padding: 1rem;
  }
  .search {
    top: 18rem; /* For screens smaller than 640px */
  }
  .search-input {
    padding: 0.5rem;
    font-size: 1rem; /* Adjust for readability */
  }
}

/* Adjustments for medium screens */
@media screen and (min-width: 640px) and (max-width: 1024px) {
  .search-container {
    width: 90%; /* Slightly smaller width for medium screens */
    padding: 0 15px; /* Adjust padding for medium screens */
  }
  .search {
    top: 19rem; /* Adjust position for medium screens */
  }
  .search-input {
    padding: 0.75rem;
    font-size: 1.1rem; /* Slightly larger font */
  }
}
</style>
