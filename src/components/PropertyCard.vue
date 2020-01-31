<template>
 <v-card
      max-width="344"
      class="mx-auto"
    >
 

    <v-img
      :src="property.image"
      height="194"
    ></v-img>
    <v-card-title>
      {{ property.headline }}
      </v-card-title>

    <v-card-text>
      <div class="float-right">
        {{ generatePrice }}     
      </div>
      <div>
        {{ property.availableRoomCount }} of {{ property.totalRoomCount }} rooms available          
      </div>

    </v-card-text>


  </v-card>
</template>
<style scoped>
.v-card__title {
  word-break: normal;
  font-size: 1rem;
  line-height: 1.4rem;
}
</style>
<script lang="ts">
import Vue from 'vue';

import { Property } from '../models/property';
import { propertyService } from '../services/PropertyService';

export default Vue.extend({
  name: 'PropertyCard',
  props: ['property'],
  data: () => ({

  }),
  computed: {
    generatePrice(): string {
      if(this.property.roomPrices.length > 1)
        return `$${Math.min.apply(Math, this.property.roomPrices)} - ${Math.max.apply(Math,this.property.roomPrices)}`;
      return `$${this.property.roomPrices[0]}`;
    }
  }
});

</script>