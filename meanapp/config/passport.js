const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');



module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts,(jwt_payload,done) => {
        //opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
        
        User.getUserById({id:jwt_payload.data.sub}, (err, user)=>{
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);

            }else{
                return done(null, false);
            }
            
        });
        //console.log(jwt_payload);
    }));
    
}