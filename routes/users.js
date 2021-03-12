var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("frmLogin",{});
});

//Esto solo realiza el proceso de auntenticación, pero aún no tiene elementos de SEGURIDAD
router.post('/login',(req,res,next)=>{
  // console.log(req.body.email,req.body.passwd);
  usuario.login(req.body.email,req.body.passwd,(e,d)=>{ //el pasword req.body.passwd debe viajar como SHA256
//E SHA256 es un algoritmo Hash
    if(d){
      //res.send('Login correcto');
      ses=req.session;
      console.log(ses.id);
      ses.userdata = d;
      console.log(ses);
      res.redirect('/');


      //Crear la sesión
    }else{
      res.json(e);
    }
  });
});

router.get('/logout',(req,res,next)=>{
  req.session.destroy((falla)=>{
    if(falla){
      res.send(501,"Error");
    }else {
      res.redirect('/');
    }
  });
});

module.exports = router;
