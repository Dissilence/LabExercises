class ChatAPI {
    static friends = [
        {
            id: 1,
            name: 'Phoebe',
            status: {
                isOnline: true,
                lastChanged: new Date()
            }
        },
        {
            id: 2,
            name: 'Ross',
            status: {
                isOnline: true,
                lastChanged: new Date()
            }
        },
        {
            id: 3,
            name: 'Rachel',
            status: {
                isOnline: false,
                lastChanged: new Date()
            }
        },
        {
            id: 4,
            name: 'Joey',
            status: {
                isOnline: false,
                lastChanged: new Date()
            }
        }           
    ]

    static startAPI() {
        //every 5 seconds, toggle online status of a random friend
        console.log('started API to toggle friend status every 3 seconds')
        ChatAPI.intervalID = setInterval(ChatAPI.randomStatusChange, 3000)
    }

    static stopAPI() {
        console.log('stopped API to toggle friend status every 3 seconds')
        clearInterval(ChatAPI.intervalID)
    }

    static subscribeToFriendStatus(friendId, handleStatusChange) {
        let friend = ChatAPI.friends.find(friend => friend.id === friendId);
        console.log('received subscription to status changes for friend #'+friendId)
        friend.statusHandler = handleStatusChange;
    }

    static unsubscribeFromFriendStatus(friendId, handleStatusChange) {
        let friend = ChatAPI.friends.find(friend => friend.id === friendId);
        console.log('received unsubscription to status changes for friend #'+friendId)
        friend.statusHandler = null;
    }

    static randomStatusChange() {
        let randomFriendId = Math.floor(Math.random() * ChatAPI.friends.length) + 1;
        let randomFriend = ChatAPI.friends.find(friend => friend.id === randomFriendId);
        randomFriend.status.isOnline = !randomFriend.status.isOnline;
        randomFriend.status.lastChanged = new Date();

        console.log(`randomly chose friend #${randomFriendId} (${randomFriend.name}) and set online status to ${randomFriend.status.isOnline}`)

        if (randomFriend.statusHandler) {
            randomFriend.statusHandler(randomFriend.status);
        }
    }
}

export default ChatAPI
