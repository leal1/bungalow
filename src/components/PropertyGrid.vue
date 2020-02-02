<template>
  <div>
      <v-container>
        <h3 class="text-center ma-8"> Available now in Seattle </h3>
        <v-row no-gutters>
          <v-col
            v-for="(property, index) in filteredProperties"
            :key="index"
            cols="12"
            xl = "3"
            lg="4"
            md="6"
            xs="12">

            <div class="mb-5"
              is="property-card"
              v-bind:property="property"
              v-bind:index="index"
              v-bind:key="property.id">
            </div>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';

import { Property } from '../models/property';
import { propertyService } from '../services/PropertyService';
import PropertyCard from './PropertyCard.vue';
export default Vue.extend({
  name: 'PropertyGrid',
  components: {
    PropertyCard,
  },
  props: {
    filteredPriceRange: {
      type: Object
    },
    sortDirection: {
      type: String
    }
  },
  data: () => ({
   properties: [] as Property[]
  }),
  created() {
    // when component is created, fetch properties with images and emit price range from those properties
    propertyService.getProperties()
      .then(properties => {
        this.properties = properties.map((p: any) => new Property(p)).filter((p: any) => p.image !== '');
        this.generatePriceRangeAndEmit();
        })
  },
  mounted() {
    console.log(this.filteredPriceRange);
  },
  methods: {
    generatePriceRangeAndEmit() {
      const min = Math.min.apply(Math, this.properties.map((p:any) => p.roomPrices));
      const max = Math.max.apply(Math, this.properties.map((p:any) => p.roomPrices));
      // emit to parent, so this price range can be passed to the filter bar's range slider from App.vue
      this.$emit('priceRange', {min, max});
    }
  },
  watch: {
    // watches on sortDirection changes, and sorts properties accordingly
    sortDirection(direction: string) {
      if(direction ==='asc') {
        this.properties.sort((a:Property, b:Property) => Math.min(...a.roomPrices) - Math.min(...b.roomPrices) );
      } else if(direction==='desc') {
        this.properties.sort((a:Property, b:Property) => Math.min(...b.roomPrices) - Math.min(...a.roomPrices) );
      }
    }
  },
  computed: {
    // filteres property if necessary by price range
    filteredProperties() {
      if(this.filteredPriceRange.min === 0 && this.filteredPriceRange.max === 0) {
        return this.properties;
      }
      return this.properties.filter((p: Property) => {
        let roomMinPrice = Math.min(...p.roomPrices);
        let roomMinInRange = roomMinPrice >= this.filteredPriceRange.min && roomMinPrice <= this.filteredPriceRange.max;
        let roomMaxPrice = Math.max(...p.roomPrices);
        let roomMaxInRange = roomMaxPrice <= this.filteredPriceRange.max && roomMaxPrice >= this.filteredPriceRange.min;
        return roomMinInRange || roomMaxInRange;
      })
    }
  }
});
</script>
