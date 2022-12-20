const people = require('./people.json');
class People {
    people = people;
    /* equal to SELECT * FROM people WHERE id >= index and ORDER BY id ASC LIMIT numberOfItems.*/
    async getPeople(index, numberOfItems) {
        const returnItems = [];
        for (let i = index; i < people.length && i < index + numberOfItems; i ++ )
            returnItems.push(this.people[i]);
        return returnItems;
    }
    /* equals to SELECT * FROM people LIMIT 1 --> then taking only column keys.*/
    async getPeopleProperties() {
        const keys = new Set();

        people.map(person => Object.keys(person).forEach(key => keys.add(key)));
        return [...keys];
    }
}

module.exports = People;