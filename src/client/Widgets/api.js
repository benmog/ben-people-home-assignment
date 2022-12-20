import axios from 'axios';
import { MY_SERVER } from '../../../utils/servers.json';

export class API {
    static async getPeople() {
        return axios.get(`http://localhost:${MY_SERVER}/api/people/people`)
    }
}
export default API;
