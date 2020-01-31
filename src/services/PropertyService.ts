import axios from 'axios';
import { Property } from 'src/models/property';

class PropertyService {
  apiUrl = process.env.VUE_APP_API_URL;
  getProperties() {
    console.log(this.apiUrl)
    return axios.get(this.apiUrl)
      .then(response => {
        return response.data.results;
      })
  }
}

export const propertyService = new PropertyService();
