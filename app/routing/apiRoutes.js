// Your apiRoutes.js file should contain two routes:
const friends = require("../data/friends.js");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Routes
module.exports = app => {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.post("/api/friends", function(req, res) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // console.log("req.body: ", req.body);
    let newFriend = req.body;
    newFriend.scores = newFriend.scores.map(score => Number.parseInt(score));
    
    const matchedFriend = findBestFriend(newFriend, friends);
    
    friends.push(newFriend);

    return res.json(matchedFriend);
  });
}

function findBestFriend(newUser, listOfFriends){
  let friendArrayIndex = -1;
  let bestScore = Infinity;

  listOfFriends.map((friend, friendIndex) => {
     
    let currentFriendScore = 0;

    friend.scores.map((score, scoreIndex) => {
      currentFriendScore += Math.abs(score - newUser.scores[scoreIndex]);
    });
    
    if(currentFriendScore < bestScore){
      bestScore = currentFriendScore;
      friendArrayIndex = friendIndex;        
    }
  });  

  return listOfFriends[friendArrayIndex];
}



// equivalent code
// module.exports = function(app){
//   app.get("/api/friends", function(req, res) {
//     return res.json(friends);
//   });

// app.post("/api/friends", function(req, res) {
//     return res.json(friends);
//   });
// }





// equivalent code
// const exportFunction = app => {
//   app.get("/api/friends", function(req, res) {
//     return res.json(friends);
//   });

// app.post("/api/friends", function(req, res) {
//     return res.json(friends);
//   });
// }

// const exportFunctionTwo = function(app){
//   app.get("/api/friends", function(req, res) {
//     return res.json(friends);
//   });

// app.post("/api/friends", function(req, res) {
//     return res.json(friends);
//   });
// }

// module.exports = exportFunction;




 