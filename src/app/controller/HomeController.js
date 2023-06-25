class HomeController{

    blog(req, res){
        res.render('home');

    }

    index(req,res){
        res.render('home');
    }

}

module.exports = new HomeController();