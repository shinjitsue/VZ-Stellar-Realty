<template>
  <div>
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
          <h3 class="mb-4 pb-2 col-12 px-0">Popular Properties</h3>
          <!-- Swiper -->
          <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="mySwiper col-12"
            :breakpoints="{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }"
          >
            <!-- Loop through each property and create a swiper-slide for each -->
            <swiper-slide
              v-for="property in popularProperties"
              :key="property.id"
              class="swiper-slide"
            >
              <div class="card pCard" style="width: 100%">
                <img
                  v-if="property.images && property.images.length > 0"
                  :src="property.images[0].fullUrl"
                  class="card-img-top"
                  alt="Property Image"
                />
                <div class="card-body text-truncate">
                  <span>{{ property.type }} • {{ property.status }}</span>
                  <br />
                  <h3 class="pt-1">₱{{ formatPrice(property.price) }}</h3>
                  <p class="text-secondary m-0 pb-1" v-if="property.lot_size">
                    Lot: {{ property.lot_size }} sqm
                  </p>
                  <small class="text-truncate">{{ property.location }}</small>
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
          <div
            class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4"
            v-for="property in listingProperties"
            :key="property.id"
          >
            <div class="card lCard">
              <img
                v-if="property.images && property.images.length > 0"
                :src="property.images[0].fullUrl"
                class="card-img-top"
                alt="Property Image"
              />
              <div class="card-body text-truncate">
                <span>{{ property.type }} • {{ property.status }}</span>
                <br />
                <h3 class="pt-1">₱{{ formatPrice(property.price) }}</h3>
                <p class="text-secondary m-0 pb-1" v-if="property.lot_size">
                  Lot: {{ property.lot_size }} sqm
                </p>
                <small class="text-truncate">{{ property.location }}</small>
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
            <h5 class="mb-3 mt-1">Offer Type</h5>
            <div class="d-flex flex-wrap gap-2">
              <button
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activeOfferType === 'all',
                  'btn-outline-primary': activeOfferType !== 'all',
                }"
                @click="setActiveOfferType('all')"
              >
                All
              </button>
              <button
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activeOfferType === 'for rent',
                  'btn-outline-primary': activeOfferType !== 'for rent',
                }"
                @click="setActiveOfferType('for rent')"
              >
                For Rent
              </button>
              <button
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activeOfferType === 'for sale',
                  'btn-outline-primary': activeOfferType !== 'for sale',
                }"
                @click="setActiveOfferType('for sale')"
              >
                For Sale
              </button>
              <button
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activeOfferType === 'for assume',
                  'btn-outline-primary': activeOfferType !== 'for assume',
                }"
                @click="setActiveOfferType('for assume')"
              >
                For Assume
              </button>
            </div>

            <hr class="border-dark-subtle mt-4" />

            <h5 class="mb-3">Property Type</h5>
            <div class="d-flex flex-wrap gap-2">
              <button
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activePropertyType === 'all',
                  'btn-outline-primary': activePropertyType !== 'all',
                }"
                @click="setActivePropertyType('all')"
              >
                All
              </button>
              <button
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activePropertyType === 'house',
                  'btn-outline-primary': activePropertyType !== 'house',
                }"
                @click="setActivePropertyType('house')"
              >
                House
              </button>
              <button
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activePropertyType === 'land',
                  'btn-outline-primary': activePropertyType !== 'land',
                }"
                @click="setActivePropertyType('land')"
              >
                Land
              </button>
              <button
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activePropertyType === 'commercial',
                  'btn-outline-primary': activePropertyType !== 'commercial',
                }"
                @click="setActivePropertyType('commercial')"
              >
                Commercial
              </button>
              <button
                type="button"
                class="btn"
                :class="{
                  'btn-primary': activePropertyType === 'apartment',
                  'btn-outline-primary': activePropertyType !== 'apartment',
                }"
                @click="setActivePropertyType('apartment')"
              >
                Apartment
              </button>
            </div>

            <hr class="border-dark-subtle mt-4" />

            <h5 class="mb-3">Price</h5>
            <div class="row">
              <div class="col">
                <small>Minimum</small>
                <select class="form-select mt-2" v-model="minPrice">
                  <option value="">No Min</option>
                  <option value="10000">₱10k</option>
                  <option value="20000">₱20k</option>
                  <option value="50000">₱50k</option>
                  <option value="100000">₱100k</option>
                  <option value="200000">₱200k</option>
                  <option value="500000">₱500k</option>
                  <option value="1000000">₱1M</option>
                </select>
              </div>
              <div class="col">
                <small>Maximum</small>
                <select class="form-select mt-2" v-model="maxPrice">
                  <option value="">No Max</option>
                  <option value="20000">₱20k</option>
                  <option value="50000">₱50k</option>
                  <option value="100000">₱100k</option>
                  <option value="200000">₱200k</option>
                  <option value="500000">₱500k</option>
                  <option value="1000000">₱1M</option>
                  <option value="2000000">₱2M</option>
                  <option value="5000000">₱5M</option>
                  <option value="10000000">₱10M</option>
                  <option value="20000000">₱20M</option>
                  <option value="50000000">₱50M</option>
                </select>
              </div>
            </div>

            <hr class="border-dark-subtle mt-4" />

            <h5 class="mb-3">Lot Area</h5>
            <div class="row">
              <div class="col">
                <small>Minimum</small>
                <select class="form-select mt-2" v-model="minLotArea">
                  <option value="">No Min</option>
                  <option value="50">50 sqm</option>
                  <option value="100">100 sqm</option>
                  <option value="200">200 sqm</option>
                  <option value="300">300 sqm</option>
                  <option value="400">400 sqm</option>
                  <option value="500">500 sqm</option>
                  <option value="1000">1000 sqm</option>
                  <option value="2000">2000 sqm</option>
                  <option value="5000">5000 sqm</option>
                </select>
              </div>
              <div class="col">
                <small>Maximum</small>
                <select class="form-select mt-2" v-model="maxLotArea">
                  <option value="">No Max</option>
                  <option value="100">100 sqm</option>
                  <option value="200">200 sqm</option>
                  <option value="300">300 sqm</option>
                  <option value="400">400 sqm</option>
                  <option value="500">500 sqm</option>
                  <option value="1000">1000 sqm</option>
                  <option value="2000">2000 sqm</option>
                  <option value="5000">5000 sqm</option>
                  <option value="10000">10000 sqm</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="clearAll">
              Clear All
            </button>
            <button type="button" class="btn btn-primary" @click="showResults">
              Show results
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Search Filter Modal -->
  </div>
</template>

<script>
import IntroductionBackground from "@/components/IntroductionBackground.vue";
import SearchBox from "@/components/SearchBox.vue";
import Footer from "@/components/Footer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import { supabase, propertyImageUrl } from "../../src/services/supabase";
import { ref, onMounted } from "vue";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = Number.MAX_SAFE_INTEGER;
const DEFAULT_MIN_LOT_AREA = 0;
const DEFAULT_MAX_LOT_AREA = Number.MAX_SAFE_INTEGER;

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
    const popularProperties = ref([]);
    const listingProperties = ref([]);

    async function processImages(properties) {
      return Promise.all(
        properties.map(async (prop) => {
          let { data: images, error: imagesError } = await supabase
            .from("property_images")
            .select("image_path")
            .eq("property_id", prop.id);

          if (imagesError) {
            console.error(imagesError);
            return prop; // Return property without images if error occurs
          }

          return {
            ...prop,
            images: images.map((img) => ({
              ...img,
              fullUrl: propertyImageUrl + img.image_path,
            })),
          };
        })
      );
    }

    async function fetchProperties() {
      // Fetch for the Listings section (recent properties)
      let { data: recent, error: recentError } = await supabase
        .from("property")
        .select("*")
        .order("id", { ascending: false }); // Descending order by id

      if (recentError) console.error(recentError);

      // Fetch all properties to randomize for the Popular section
      let { data: allProperties, error: allPropertiesError } = await supabase
        .from("property")
        .select("*");

      if (allPropertiesError) console.error(allPropertiesError);

      // Randomize allProperties for the Popular section and limit to 6
      let randomizedProperties = allProperties
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);

      // Process images for the Popular section
      popularProperties.value = await processImages(randomizedProperties);

      // Process images for the Listings section, then limit to 8
      let processedRecent = await processImages(recent);
      listingProperties.value = processedRecent.slice(0, 8); // Limit to 8 properties
    }

    onMounted(fetchProperties);

    // Method to format price
    const formatPrice = (price) => {
      return new Intl.NumberFormat("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
      }).format(price);
    };

    return {
      popularProperties,
      listingProperties,
      formatPrice,
      modules: [FreeMode, Pagination],
    };
  },

  data() {
    return {
      activeOfferType: "all",
      activePropertyType: "all",
      minPrice: "",
      maxPrice: "",
      minLotArea: "",
      maxLotArea: "",
      results: [],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  beforeRouteLeave(to, from, next) {
    this.removeModalBackdrop();
    next();
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

    // Set the active offer type
    setActiveOfferType(type) {
      this.activeOfferType = type;
    },
    // Set the active property type
    setActivePropertyType(type) {
      this.activePropertyType = type;
    },
    // Clear all filters
    clearAll() {
      this.activeOfferType = "all";
      this.activePropertyType = "all";
      this.minPrice = "";
      this.maxPrice = "";
      this.minLotArea = "";
      this.maxLotArea = "";
    },

    // Show results and navigate to the results page
    async showResults() {
      this.removeModalBackdrop();
      await this.fetchResults();
      console.log("Results fetched:", this.results); // Debugging log
      this.$store.dispatch("updateResults", this.results);
      this.$router.push({ path: "/result" });
      this.resetBodyStyles();
    },

    // Remove the modal backdrop and reset body class
    removeModalBackdrop() {
      const modalBackdrop = document.querySelector(".modal-backdrop");
      if (modalBackdrop) {
        modalBackdrop.remove();
      }
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "";
    },

    // Reset body styles to ensure scrolling works
    resetBodyStyles() {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    },

    // Fetch results from Supabase based on filters
    async fetchResults() {
      const { data, error } = await supabase
        .from("property")
        .select("*")
        .ilike(
          "status",
          this.activeOfferType === "all" ? "%" : this.activeOfferType
        )
        .ilike(
          "type",
          this.activePropertyType === "all" ? "%" : this.activePropertyType
        )
        .gte("price", this.minPrice || DEFAULT_MIN_PRICE)
        .lte("price", this.maxPrice || DEFAULT_MAX_PRICE)
        .gte("lot_size", this.minLotArea || DEFAULT_MIN_LOT_AREA)
        .lte("lot_size", this.maxLotArea || DEFAULT_MAX_LOT_AREA);

      if (error) {
        console.error("Error fetching results:", error);
      } else {
        console.log("Fetched data:", data); // Debugging log
        this.results = await this.processImages(data);
      }
    },

    // Process images for properties
    async processImages(properties) {
      return Promise.all(
        properties.map(async (prop) => {
          let { data: images, error: imagesError } = await supabase
            .from("property_images")
            .select("image_path")
            .eq("property_id", prop.id);

          if (imagesError) {
            console.error(imagesError);
            return prop; // Return property without images if error occurs
          }

          return {
            ...prop,
            images: images.map((img) => ({
              ...img,
              fullUrl: propertyImageUrl + img.image_path,
            })),
          };
        })
      );
    },
  },
};
</script>

<style scoped>
@import "swiper/swiper-bundle.css";

.form-select {
  background-color: #f5f5f5 !important;
  border-radius: 6px !important;
  padding: 8px 12px !important;
  background-size: 12px !important;
}

.form-select:focus {
  border-color: #dfad03;
  box-shadow: 0 0 0 0.2rem #dfac0365;
  outline: none;
}

.btn-primary {
  background-color: #dfad03 !important;
  border-color: #dfad03 !important;
}

.btn-outline-primary {
  color: #191a36 !important;
  border-color: #191a3671 !important;
}

.btn-outline-primary:hover {
  background-color: #fff !important;
  color: #191a36 !important;
  border-color: #dfad03 !important;
}

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
