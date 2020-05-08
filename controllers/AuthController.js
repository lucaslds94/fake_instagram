const { Usuario } = require('../models');
const bcrpyt = require('bcrypt');

const AuthController = {
    
    showLogin: (req,res) => {
        let err = (req.query.error == 1);
        res.render('auth/login',{err});
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: (req,res) => {
        res.render('index');
    },

    login: async (req,res) => {

        let {senha, email} = req.body;

        let usuario = await Usuario.findOne({where:{email}});
        
        if(!usuario){
            return res.redirect('/?error=1');
        }

        if(!bcrpyt.compareSync(senha, usuario.senha)){
            return res.redirect('/?error=1');
        }

        return res.redirect('/home');

    }


}

module.exports = AuthController;