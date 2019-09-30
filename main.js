var shortid = require('shortid')
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('db.json')
var db = low(adapter)
db.defaults({ topic: [], author: [] })
  .write()

// db.get('author')
//   .push({id:1, name:'egoing', profile:'developer'})
//   .write()

// db.get('author')
//   .push({id:2, name:'sjw', profile:'programmer'})
//   .write()

// db.get('topic')
//   .push({id:1, title:'lowdb', desciption:'low db is..', author_id:1})
//   .write()

// db.get('topic')
//   .push({id:2, title:'mysql', desciption:'mysql is..', author_id:1})
//   .write()

// db.get('author')
//     .find({id:1})
//     .assign({name:'jhyyk'})
//     .write()


// console.log(db.get('topic')
//     .find({id:1})
//     .value())


// var sid = shortid.generate();
// db.get('author')
//   .push({id:sid, name:'would', profile:'coffee'})
//   .write()