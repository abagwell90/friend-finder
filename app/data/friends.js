const friends = [
    {
        "name": "Ted",
        "photo": "https://randomuser.me/api/portraits/men/94.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Lucy",
        "photo": "https://randomuser.me/api/portraits/women/27.jpg",
        "scores": [
            1,
            1,
            4,
            4,
            5,
            4,
            2,
            5,
            1,
            1
        ]
    },
    {
        "name": "Alice",
        "photo": "https://randomuser.me/api/portraits/women/29.jpg",
        "scores": [
            5,
            1,
            3,
            4,
            5,
            5,
            2,
            5,
            1,
            1
        ]
    },
    {
        "name": "Bob",
        "photo": "https://randomuser.me/api/portraits/men/83.jpg",
        "scores": [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    },
    {
        "name": "Frank",
        "photo": "https://randomuser.me/api/portraits/men/29.jpg",
        "scores": [
            1,
            1,
            4,
            1,
            5,
            1,
            1,
            5,
            1,
            1
        ]
    },
    {
        "name": "Tracy",
        "photo": "https://randomuser.me/api/portraits/women/24.jpg",
        "scores": [
            5,
            5,
            4,
            5,
            5,
            1,
            2,
            5,
            5,
            1
        ]
    }
]

function friendTest(newFriend, savedFriend) {
    let totalDifference = 0;

    newFriend.scores.forEach(function (score, i) {

        const newFriendScore = newFriend.scores[i]
        const savedFriendScore = savedFriend.scores[i]
        const difference = newFriendScore - savedFriendScore

        totalDifference = totalDifference + Math.abs(difference);
    })
    return totalDifference;
}

function testSavedFriends(newFriend, savedFriends) {

    var closestFriend = null;
    var closestTotalDifference = Infinity;

    savedFriends.forEach(function (savedFriend, i) {
        var totalDifference = friendTest(newFriend, savedFriend);
        if (totalDifference < closestTotalDifference) {
            closestFriend = savedFriend
            closestTotalDifference = totalDifference
        }
    })
    return closestFriend;
}


module.exports = {
    testSavedFriends,
    friends,
};

