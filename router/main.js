module.exports = function(app, fs){
    var mariaDB = require("../public/config/DBConnection")();
    var connection  = mariaDB.init();

    app.get("/", function(req, res){
        var sql = "select * from tblMember order by regDate desc";
        connection.query(sql, function(err, result){
            if(err)
                console.error("err" + err);
            else {
                console.info(result);
                res.send(result);
            }
        })
    });

    app.get("/about", function(req, res){
        res.render("about.html");
    });

    app.get("/getUser/:id", function(req, res){
        var sql = "select * from tblMember where id= '" + req.params.id + "' limit 1";
        connection.query(sql, function(err, result){
            if(err)
                console.error("err" + err);
            else{
                console.info(result);
                res.send(result);
            }
        })
    });
}