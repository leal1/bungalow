<template>
  <v-toolbar dense>

      <v-toolbar-title >Seattle</v-toolbar-title>
        <v-menu offset-y
        :close-on-content-click=false>
          <template v-slot:activator="{ on }">
            <v-btn class="ml-4"
              text
              v-on="on">
              Price
            </v-btn>
          </template>
             
          <v-card>
            <RangeSlider :priceRange="priceRange"/>
          </v-card>
        </v-menu>
    </v-toolbar>
</template>

<style scoped>
.v-menu__content {
  width: 30%;
}
</style>

<script lang="ts">
import Vue from 'vue';

import { Property } from '../models/property';
import { propertyService } from '../services/PropertyService';
import RangeSlider from './RangeSlider.vue';

export default Vue.extend({
  name: 'FilterBar',
  components: {
    RangeSlider
  },
  // takes in priceRange prop to pass to RangeSlider component.
  props: {
    priceRange: {
      type: Array,
      default() { return []}
    }
  },
  data: () => ({
   
  }),
  computed: {

  },
  methods: {

  }
});

</script>