// Dependencies
const friends = require("../data/friends.js");

// Routes
module.exports = app => {
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  // Request and function to turn string scores to integers 
  app.post("/api/friends", function (req, res) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let newFriend = req.body;
    newFriend.scores = newFriend.scores.map(score => Number.parseInt(score));

    // Function to post new friends to choose from
    const matchedFriend = findBestFriend(newFriend, friends);
    friends.push(newFriend);
    return res.json(matchedFriend);
  });
}
// Function to find best friend of friend array
function findBestFriend(newUser, listOfFriends) {
  let friendArrayIndex = -1;
  let bestScore = Infinity;

  listOfFriends.map((friend, friendIndex) => {

    let currentFriendScore = 0;

    friend.scores.map((score, scoreIndex) => {
      currentFriendScore += Math.abs(score - newUser.scores[scoreIndex]);
    });

    if (currentFriendScore < bestScore) {
      bestScore = currentFriendScore;
      friendArrayIndex = friendIndex;
    }
  });

  return listOfFriends[friendArrayIndex];
}