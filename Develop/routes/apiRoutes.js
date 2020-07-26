const noteTask = require("../public/assets/js/index")

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(noteTask);
    })
};

app.post("/api/notes", function (req, res) {
    noteTask.push(req.body);
    res.json(true);
});



// app.post("/api/delete", function (req, res) {
    
   
// });


