<template>
  <div class="search px-3 px-sm-0">
    <div
      class="search-container bg-white rounded shadow-lg align-items-center justify-content-center p-3"
    >
      <div class="container p-3">
        <form @submit.prevent="filterProperties">
          <div class="row g-4">
            <div class="col-lg-8 col-12">
              <div class="search-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search for location and more.."
                  v-model="searchCriteria.location"
                  aria-label="Location"
                />
              </div>
            </div>
            <div class="col-lg-2 col-6">
              <div
                type="button"
                class="btn btn-filter position-relative"
                data-bs-toggle="modal"
                data-bs-target="#searchFilter"
              >
                <i class="bi bi-sliders"></i> Filters
                <span
                  class="position-absolute top-0 start-100 translate-middle p-2 bg-pr border border-light rounded-circle"
                >
                  <span class="visually-hidden">New alerts</span>
                </span>
              </div>
            </div>
            <div
              class="col-lg-2 col-6 d-flex justify-content-center align-items-center"
            >
              <Button1 />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button1 from "./Button1.vue";
export default {
  name: "SearchBox",
  components: {
    Button1,
  },
  data() {
    return {
      searchCriteria: {
        location: "",
        propertyType: "",
        priceRange: "",
      },
    };
  },
};
</script>

<style scoped>
.search-container {
  max-width: 930px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.search {
  position: absolute;
  width: 100%;
  z-index: 30;
  top: 20rem; /* Default for large screens */
}

.search-input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem; /* Responsive font size */
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-box {
  position: relative;
}

.search-box input {
  background-color: #f5f5f5 !important;
  border: none !important;
  outline: none !important;
  text-indent: 30px !important;
  font-size: 16px !important;
  border-radius: 9px !important;
  height: 40px !important;
  width: 100% !important;
  padding-left: 10px !important;
}

.search-box input::placeholder {
  font-style: italic !important;
  color: #999 !important;
}

.search-box input:focus {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.157);
}

.bi.bi-search {
  position: absolute;
  top: 50%;
  left: 10px;
  margin-left: 5px;
  transform: translateY(-50%);
}

.btn.btn-filter {
  background-color: #f5f5f5;
  color: #000;
  border: none;
  outline: none;
  height: 40px;
  width: 100%;
  border-radius: 9px !important;
}

.btn.btn-filter:hover {
  background-color: #e0e0e0; /* Darker shade for hover */
}

.bg-pr {
  background-color: #dfad03;
}
</style>
