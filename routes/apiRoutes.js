
let savedData = require("../data/savedData")

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(savedData)
    });

    app.post("/api/notes", function (req, res) {
        savedData.push(req.body);
        res.json("saved");
    });

    app.delete("/api/notes/:index", function (req, res) {
        var elem = parseInt(req.params.index);
        var tempjournal = [];
        for (var i = 0; i < savedData.length; i++) {
          if (i !== elem) {
            tempjournal.push(savedData[i]);
          }
        }
        savedData = tempjournal;
    
        res.json("delete");
        console.log ("deleted")
      });
};








