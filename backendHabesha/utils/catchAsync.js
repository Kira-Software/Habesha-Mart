// for controller function with async 

module.exports=fn=>{
    return (req,res,next)  =>{
        fn(req,res,next).catch(next)  // b try catch block fanta yegba new eza catch async west yalew error happen karge b catch next 
                                      // amakagnenet wede global error handler yehedal
    }
                       //uses for only asyncronous function
}