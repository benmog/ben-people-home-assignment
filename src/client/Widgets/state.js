import API from './api';
export const actions = {
    getPeople: async (index, numberOfItems) => {
        const response = await API.getPeople(index, numberOfItems);
        return response.data;
    }
}

export default actions;

