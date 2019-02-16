var friendsModel = require("../data/friends");

module.exports = function (app){
    app.get('/api/friends', (req, res) => {
   
        res.json(friendsModel.friends);
    })
  

    app.post('/api/friends', (req, res) => {
        var newFriend = req.body
        var matchedFriend = friendsModel.testSavedFriends(newFriend, friendsModel.friends);
        friendsModel.friends.push(newFriend);
        return res.json(matchedFriend);
    })
}