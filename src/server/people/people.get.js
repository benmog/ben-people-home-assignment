const { people } = require('../DB')
module.exports = async (req, res) => {
    const { index = 0, numberOfItems = 20, filters } = req.query;

    const promises = [people.getPeople(index, numberOfItems, filters), people.getPeopleProperties()];
    const [items, headers] = await Promise.all(promises);

    res.json({ items, headers });
}