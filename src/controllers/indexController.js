const { validationResult } = require("express-validator");
module.exports = {

    index: (req, res) => {
        res.render('index')
    }, 
    userForm: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            const {name, color, email, age,cookieColor} = req.body
           
            req.session.user = {
                 name: name,
                 email: email,
                 color: color,
                 age: age }
        
        if(cookieColor){

            res.cookie("cookies", req.session.user, {maxAge:60000})
        }
        
        return res.redirect("/") }
        
        else{
            res.render('index', {
                errors: errors.mapped()
                , old: req.body
            })
        }  
    },
    profile: (req, res) => {
        res.render('profile')
    },
    delete: (req,res)=> {
        req.session.destroy();
        res.cookie("cookies", null, {maxAge: -1})
        return res.redirect("/")
    }
}
