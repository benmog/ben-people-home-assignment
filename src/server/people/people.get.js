const { people } = require('../DB')
module.exports = async (req, res) => {
    const { index, numberOfItems } = req.query;

    const promises = [people.getPeople(index, numberOfItems), people.getPeopleProperties()];
    const [items, columns] = await Promise.all(promises);

    res.json({ items, columns });
}