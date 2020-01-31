import axios from 'axios';
import { Property } from 'src/models/property';

class PropertyService {
  apiUrl = process.env.VUE_APP_API_URL;
  async getProperties() {
    const response = await axios.get(this.apiUrl);
    return response.data.results;
  }
}

// initialize singleton to be imported from other components
export const propertyService = new PropertyService();
