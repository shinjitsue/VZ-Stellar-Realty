<template>
  <div class="container mt-5">
    <h1 class="mb-4">Property Listings</h1>
    <input
      type="text"
      class="form-control mb-4"
      placeholder="Search properties..."
      v-model="searchQuery"
      @input="searchProperties"
    />
    <div class="row">
      <div
        class="col-md-4"
        v-for="property in filteredProperties"
        :key="property.id"
      >
        <PropertyCard :property="property" />
      </div>
    </div>
  </div>
</template>
