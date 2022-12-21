import API from './api';
export const actions = {
    getPeople: async (index, numberOfItems, filters) => {
        const response = await API.getPeople(index, numberOfItems, filters);
        return response.data;
    }
}

export default actions;

