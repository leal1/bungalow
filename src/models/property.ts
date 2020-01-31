import { Amenity } from './Amenity';

export class Property {
  constructor(initializer: any) {
    this.id = initializer.id;
    this.totalRoomCount = initializer.total_room_count;
    this.availableRoomCount = initializer.available_room_count;
    this.earliestAvailableDate = initializer.earliest_available_date;
    this.amenities = initializer.amenities;
    this.roomPrices = initializer.room_prices;
    this.headline = initializer.headline;
    this.showingToday = initializer.showing_today;
    if (initializer.images && initializer.images.length > 0) {
      this.image = initializer.images[0].sm_url;
    }
    else {
      this.image = ""
    }
  }
  id: number;
  totalRoomCount: number;
  availableRoomCount: number;
  earliestAvailableDate: string;
  amenities: Amenity[];
  roomPrices: number[];
  headline: string;
  showingToday: boolean;
  image: string;


}