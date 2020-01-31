<template>
  <v-app>
    <v-content>
      <FilterBar :priceRange="priceRange"/>
      <PropertyGrid @priceRange="updatePriceRange"/>
    </v-content>
  </v-app>
</template>

<script lang="ts">

import Vue from 'vue';
import PropertyGrid from './components/PropertyGrid.vue';
import FilterBar from './components/FilterBar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    PropertyGrid,
    FilterBar,
  },

  data: () => ({
    priceRange: [0, 0]
  }),
  methods: {
    // called when PropertyGrid emits range
    updatePriceRange(range: any) {
      // sets min-max range to be passed into FilterBar component as prop
      Vue.set(this.priceRange, 0, range.min);
      Vue.set(this.priceRange, 1, range.max);
    }
  }
});
</script>
