const db = require('../models');
const sampleTable = db.sampleTable;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const table = {
        title: req.body.title,
    }

    sampleTable.create(table).then(data => res.send(data)).catch(err => res.status(500).send({
        message: err.message
    }))
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    sampleTable.findAll({ where: condition }).then(data => res.send(data)).catch(err => res.status(500).send({
        message: err.message
    }))
}
