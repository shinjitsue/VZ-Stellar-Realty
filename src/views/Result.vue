<template>
  <div>
    <h1>Search Results</h1>
    <div v-if="results.length">
      <div class="container-fluid">
        <div class="container" id="listings">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 col-12 mb-4 mb-md-4 mb-sm-4"
              v-for="property in results"
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
        </div>
      </div>
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
    };
  },
  created() {
    this.results = this.$store.getters.getResults;
    if (!this.results.length) {
      console.error("No results found in Vuex store.");
    }
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString();
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 400px;
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
</style>
