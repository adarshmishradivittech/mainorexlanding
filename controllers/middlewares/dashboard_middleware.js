var static=function(options){
    
    
  return function(req,res,next){

  if(  req.session.email && req.session.password )
   {


   
    if(req.session.email===req.session.adminemail  && req.session.password===req.session.adminpassword){

      next();

    }
    else{
      res.redirect("/admin")
     }
    
   }
   else{
    res.redirect("/admin")
   }
  }
}




// var static=function(req,res,next){

//     // if(req.session.email)
//     //  {
    
    
//     //   next();
//     //  }
//     //  else{
//     //   res.redirect("/admin")
//     //  }



//     console.log(admindata)
//     next();
 
//   }







var validation=function(options){
   
  
return function(req,res,next){

  if(  req.session.email && req.session.password )
   {
    if(req.session.email===req.session.adminemail  && req.session.password===req.session.adminpassword){

      next();

    }
    else{
      res.redirect("/admin")
     }
    
   }
   else{
    res.redirect("/admin")
   }
// console.log(options)
//   next();
}
}


module.exports={static,validation,};