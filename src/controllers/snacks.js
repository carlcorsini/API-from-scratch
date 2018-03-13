const model = require('../models/snacks')

getAll = (req, res, next) => {
  if (model.getAll())
    res.status(200).json(model.getAll())
  else res.status(404)
}

getById = (req, res, next) => {
  let result = model.getById(req.params.id)
  if (result.error) next(result)
  else res.status(200).json(result)
}

create = (req, res, next) => {
  if (!req.body.name) {
    next({
      status: 400,
      error: 'name missing for entry'
    })
  }
  let name = req.body.name
  let result = model.create(name)
  res.status(201).json(result)
}

update = (req, res, next) => {
  let id = req.params.id
  let name = req.query.name
  let result = model.replace(id, name)
  if (result.error) next(result)
  else res.status(201).json(result)
}

deleteById = (req, res, next) => {
  let id = req.params.id
  let result = model.deleteById(id)
  res.status(200).json(result)
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
}