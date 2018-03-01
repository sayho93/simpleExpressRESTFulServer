var mysql = require("mysql");
var config = require("./database").dev;

module.exports = function(){
    return {
        init: function(){
            return mysql.createConnection({
                host: config.host,
                port: config.port,
                user: config.user,
                password: config.password,
                database: config.database
            })
        },
        testDrive: function(con){
            con.connect(function(err){
                if(err)
                    console.error("mysql connection failure");
                else
                    console.info("mysql connection success");
            })
        }
    }
};