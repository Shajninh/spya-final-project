const SportModel = require('../models/sportModels');

// GET /api/sports
const getSports = (req, res) => {
  try {
    const sports = SportModel.getAll();
    res.status(200).json(sports);
  } catch (err) {
    console.error('Error fetching sports:', err);
    res.status(500).json({ error: 'Failed to load sports' });
  }
};

// POST /api/sports
const addSport = (req, res) => {
  const { userName, sport } = req.body;

  if (!userName || !sport) {
    return res.status(400).json({ error: 'Both name and sport are required' });
  }

  try {
    const newEntry = SportModel.create(userName, sport);
    res.status(201).json(newEntry);
  } catch (err) {
    console.error('Error adding sport:', err);
    res.status(500).json({ error: 'Failed to save sport' });
  }
};

// DELETE /api/sports/:id
const removeSport = (req, res) => {
  try {
    const deleted = SportModel.deleteById(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error deleting sport:', err);
    res.status(500).json({ error: 'Failed to delete sport' });
  }
};

module.exports = {
  getSports,
  addSport,
  removeSport
};