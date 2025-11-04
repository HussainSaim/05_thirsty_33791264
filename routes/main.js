// Create a new router
const express = require("express");
const router = express.Router();

var shopData = {
    shopName: "Drinkers Delight",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks", "Coffee"],
    shopLocations: [                //create new shopLocations array
        {
            city: "London",
            manager: "John Smith",                          //multi-dimensional array to hold infomation for each shop
            address: "123 Oxford Street, London, W1D 1AA"
        },
        {
            city: "Glasgow",
            manager: "Sarah McDonald",
            address: "456 Buchanan Street, Glasgow, G1 3AH"
        },
        {
            city: "Manchester",
            manager: "James Wilson",
            address: "789 Market Street, Manchester, M1 1WR"
        }
    ]
};
// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });

 router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered! We will send an email to you at ' + req.body.email);    
});

// Separate survey routes
router.get("/survey", (req,res) => {
    res.render("survey.ejs", shopData);     
});

router.post("/survey-complete", (req,res) => {          //Messge showign inputted survey data
    res.send('Thank you ' + req.body.first + ' ' + req.body.last + ' for completing our survey! We appreciate your feedback. Your email is ' + req.body.email+ '. You indicated that you consume ' + req.body.category + ' and are ' + req.body.age + ' years old. You have also indicated that you are ' + (req.body.studentY ? 'a student.' : 'not a student.') );
});

// Export the router object so index.js can access it
module.exports = router;
