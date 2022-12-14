const router = require('express').Router();
const store = require('../db/store');

// GET "/api/notes" from database
router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err))

});

// POST (write) "/api/notes" from database
router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((note) => {
            res.json(note)
        })
        .catch((err) => res.status(500).json(err))
});

// DELETE "/api/notes" from database
router.delete('/notes/:id', (req, res) => {
    store
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err))
})

module.exports = router;