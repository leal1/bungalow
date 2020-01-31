<template>
  <div>
    <!-- {{ properties[0]}} -->
      <v-container>
        <h3 class="text-center ma-5"> Available now in Seattle </h3>
        <v-row no-gutters>
          <v-col
            v-for="(property, index) in properties"
            :key="index"
            cols="12"
            lg="4"
            md="6"
            xs="12"
            >

                      <div class="mb-5"
            is="property-card"
            
            v-bind:property="property"
            v-bind:index="index"
            v-bind:key="property.id"
          ></div>
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
  data: () => ({
   properties: [] as Property[]
  }),
  created() {
    propertyService.getProperties()
      .then(properties => {
        this.properties = properties.map((p: any) => new Property(p)).filter((p: any) => p.image !== '');
        this.generatePriceRangeAndEmit();
        })
  },
  methods: {
    generatePriceRangeAndEmit() {
      const min = Math.min.apply(Math, this.properties.map((p:any) => p.roomPrices));
      const max = Math.max.apply(Math, this.properties.map((p:any) => p.roomPrices));
      this.$emit('priceRange', {min, max});
    }
  }

});
</script>
