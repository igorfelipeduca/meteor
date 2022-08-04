import axios from 'axios';
import { OrbitResponseInterface } from '../types/orbitResponseInterface';

const base_url = 'https://api.nasa.gov/neo/rest/v1/feed';

class api {
  public async get(url: string): Promise<OrbitResponseInterface> {
    return (await axios.get<OrbitResponseInterface>(`${base_url}${url}`)).data;
  }
}

export default new api();
