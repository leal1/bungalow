<template>
  <v-range-slider
  v-model="range"
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
    
  },
  mounted: function() {
    // set range and min/max of slider passed from grandparent App.vue
    this.$set(this.range, 0, this.priceRange[0]);
    this.$set(this.range, 1, this.priceRange[1]);
    this.min = this.priceRange[0];
    this.max = this.priceRange[1]
    // TODO: have slider filter properties
  },
  created() { 
  }
});

</script>