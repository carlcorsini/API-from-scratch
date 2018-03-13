const db = require('../../db/snacks')
const uuid = require('uuid/v4')

getAll = () => {
  return db
}

getById = (paramId) => {
  let result;
  db.forEach(a => {
    if (Number(a.id) === Number(paramId)) {
      result = a
    }
  })
  if (result === undefined) {
    result = {
      status: 404,
      error: 'id not found'
    }
  }
  return result
}

create = (name) => {
  let result
  if (name == undefined || name === '') {
    result = {
      status: 400,
      error: 'name missing for entry'
    }
  } else {
    db.push({
      name,
      id: uuid()
    })
    result = db[db.length - 1]
  }
  return result
}

update = (id, name) => {
  let result
  db.forEach(a => {
    if (id === a.id) {
      a.name = name
      result = db
    }
  })
  if (result === undefined) {
    result = {
      status: 404,
      error: 'id not found'
    }
  }
  return result
}

deleteById = (id) => {
  let result;
  db.forEach((a, idx) => {
    if (id === a.id)
      db.splice(idx, 1)
    result = db
  })
  if (result === undefined) {
    result = {
      status: 404,
      error: 'id not found'
    }
  }
  return result
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
}