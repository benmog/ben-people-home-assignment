const people = require('./people.json');
class People {
    people = people;
    /**
    equal to SELECT * FROM people WHERE id >= index
     AND {filter.key like '%filter.value%'}
     and ORDER BY id ASC LIMIT numberOfItems.
    */
    async getPeople(index, numberOfItems, filters) {
        const items = this.filterItems(filters);
        const returnItems = [];
        for (let i = index; i < items.length && i < index + numberOfItems; i ++ )
            returnItems.push(items[i]);
        return returnItems;
    }

    filterItems(filters) {
        if (filters.value && filters.keys.length) {
            return this.people.filter(person => filters.keys.some(key => person[key].includes(filters.value)))
        }
        return this.people;
    }
    /* equals to SELECT * FROM people LIMIT 1 --> then taking only column keys.*/
    async getPeopleProperties() {
        const keys = new Set();

        people.map(person => Object.keys(person).forEach(key => keys.add(key)));
        return [...keys];
    }
}

module.exports = People;