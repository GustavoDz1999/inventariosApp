var express = require('express');
var router = express.Router();
var session = require('express-session');


router.get('/alta',(req,res,next)=>{
  var ses=req.session;
  res.render("almacen/frmAlta",{ user : ses.userdata} );
  //res.render("almacen/frmAlta");
});

router.get('/reporte',(req,res,next)=>{
  res.render("almacen/frmReporte");
});

router.get('/baja',(req,res,next)=>{
  res.render("almacen/frmBaja");
});



//req,res,next = midelware

module.exports = router;
