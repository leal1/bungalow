<template>
  <v-range-slider
  v-model="range"
  v-on:change="filterProperties"
  :max="max"
  :min="min"
  hide-details
  class="align-center">

    <template v-slot:prepend>
      <v-text-field
        :value="range[0]"
        class="mt-0 pt-0"
        hide-details
        single-line
        type="number"
        style="width: 60px"
        @change="$set(range, 0, $event)"
      ></v-text-field>
    </template>

    <template v-slot:append>
      <v-text-field
        :value="range[1]"
        id="max-num"
        class="mt-0 pt-0"
        hide-details
        single-line
        type="number"
        style="width: 60px"
        @change="$set(range, 1, $event)">
      </v-text-field>
    </template>

  </v-range-slider>
</template>

<style scoped>

</style>

<script lang="ts">
import Vue from 'vue';

import { Property } from '../models/property';
import { propertyService } from '../services/PropertyService';

export default Vue.extend({
  name: 'RangeSlider',
  props: ['priceRange'],
  data: () => ({
    min: 0,
    max: 90,
    range: [0, 90]
  }),
  computed: {

  },
  methods: {
    filterProperties() {
      // emits filtered Price Range to root, so App.Vue can pass to PropertyGrid 
      this.$root.$emit('filteredPriceRange', {min: this.range[0], max: this.range[1] });
    }
  },
  mounted: function() {
    // set range and min/max of slider passed from grandparent App.vue
    this.$set(this.range, 0, this.priceRange.min);
    this.$set(this.range, 1, this.priceRange.max);
    this.min = this.priceRange.min;
    this.max = this.priceRange.max;
  },
  created() { 
  }
});

</script>