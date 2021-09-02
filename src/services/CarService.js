import axios from 'axios';

class CarService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://127.0.0.1:8000/api'
    })
  }

  async getAll() {
    try {
      const { data } = await this.apiClient.get('cars');

      return data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }
}

export default new CarService();