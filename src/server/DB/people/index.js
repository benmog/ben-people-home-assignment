const people = require('./people.json');
class People {
    people = people;
    async getPeople(index, numberOfItems) {
        return this.people;
    }
    async getPeopleProperties() {
        return [];
    }
}

export default People;