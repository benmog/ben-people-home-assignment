import axios from 'axios';
import { MY_SERVER } from '../../../utils/servers.json';

export class API {
    static async getPeople(index, numberOfItems, filters) {
        return axios.get(`http://localhost:${MY_SERVER}/api/people/people`, { params: { index, numberOfItems, filters }})
    }
}
export default API;
