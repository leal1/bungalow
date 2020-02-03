<template>
  <v-app>
    <v-content>
      <FilterBar 
      :priceRange="priceRange"
      @sortDirection="updateSortDirection"
      />
      <PropertyGrid 
      @priceRange="updatePriceRange"
      :filteredPriceRange=filteredPriceRange
      :sortDirection=sortDirection
      />
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
    priceRange: {
      min: 0,
      max: 0
    },
    filteredPriceRange: {
      min: 0,
      max: 0
    },
    sortDirection: ''
  }),
  methods: {
    // called when PropertyGrid emits range
    updatePriceRange(range: {min: number, max: number}) {
      // sets min-max range to be passed into FilterBar component as prop
      this.priceRange.min = range.min;
      this.priceRange.max = range.max;
    },
    updateSortDirection(direction: string) {
      this.sortDirection = direction;
    }
  },
  mounted() {
    this.$root.$on('filteredPriceRange', (range: {min: number ,max: number}) => {
      this.filteredPriceRange.min = range.min;
      this.filteredPriceRange.max = range.max;

    })
  }
});
</script>
