<template>
  <v-toolbar dense>

      <v-toolbar-title >Seattle</v-toolbar-title>
        <v-menu offset-y min-width=30%
        :close-on-content-click=false>
          <template v-slot:activator="{ on }" >
            <v-btn class="ml-4"
              text
              v-on="on">
              Price Range
            </v-btn>
          </template>
             
          <v-card class="price-range">
            <RangeSlider :priceRange="priceRange"/>
          </v-card>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="ml-4"
              text
              v-on="on">
              Sort By
            </v-btn>
          </template>
             
          <v-card>
            <v-list>
              <v-list-item>
                <span 
                      @click="emitSortDirection('asc')" 
                      class="filter-option"
                      v-bind:class="{'active': lowToHigh}">
                  Price low to high
                </span>
              </v-list-item>
              <v-list-item>
                <span 
                      @click="emitSortDirection('desc')" 
                      class="filter-option"
                      v-bind:class="{'active': highToLow}">
                  Price high to low
                </span>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

    </v-toolbar>
</template>

<style scoped>
  .filter-option {
    cursor: pointer;
  }
  .active { 
    font-weight: 800;
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
      type: Object,
      default() { return {}}
    },
    sortDirection: {
      type: String,
      default() { return null}
    }
  },
  data: () => ({
   lowToHigh: false,
   highToLow: false
  }),
  computed: {

  },
  methods: {
    emitSortDirection(direction: string): void {
      // sets booleans so 'active' sort is bolded
      if(direction ==='asc') {
        this.lowToHigh = true;
        this. highToLow = false;
      } else {
        this.lowToHigh = false;
        this. highToLow = true;
      }
      // emit to parent, so App.vue can pass the sortDirection to PropertyGrid to sort properties
      this.$emit('sortDirection', direction);
    }
  }
});

</script>