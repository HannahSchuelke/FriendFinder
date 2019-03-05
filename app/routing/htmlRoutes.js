// Dependencies
const path = require("path");
// HTML Routes
module.exports = app => {
    // Default, catch-all route that displays the home page.
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //  GET Route to /survey which should display the survey page.
    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}