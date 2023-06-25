const Student = require('../model/Student');

class SiteController{
    index(req, res){
      Student.find({})
      .then(student => {res.json(student)})
      .catch(err => (res.status(400).json({err:"loi"})));
    }
}

module.exports = new SiteController;