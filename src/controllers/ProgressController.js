const mongoose = require('mongoose');
const Progress = mongoose.model('Progress');

module.exports = {
    async index(req, res) {
        const progress = await Progress.find();

        return res.json(progress);
    },

    async show(req, res) {
        const progress = await Progress.findById(req.params.id);

        return res.json(progress);
    },

    async store(req, res) {
        const progress = await Progress.create(req.body);

        return res.json(progress);
    },

    async update(req, res) {
        const progress = await Progress.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return res.json(progress)
    },

    async destroy(req, res) {
        await Progress.findByIdAndRemove(req.params.id);

        res.send();
    },
}