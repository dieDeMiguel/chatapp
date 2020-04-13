const users = [];

const addUser = ({id, username, room}) => { 
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();
    //Sanitizing data from the client
    if(!username || !room) {
        return {
            error: "Username and room are required"
        };
    };

    //Checking that the user doen't exist in this room
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })


    if(existingUser) {
        return {
            error: 'Username is in use'
        };
    };

    //Store user
    const user = {id, username, room};
    users.push(user);
    return { user }

};

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if(index!==-1) {
        return users.splice(index, 1)[0]
    };
};

const getUser = (id) => {
    const user = users.find((user) => user.id === id)
    if(!user) {
        return {
            error: 'Unable to find user with the provided ID'
        } 
    } else {
        return user;
    };
};

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room);
};

// const diego = addUser({
//     id: 33,
//     username: 'Diego',
//     room: 'audiok'
// });

// addUser({
//     id: 37,
//     username: 'juan',
//     room: 'audio'
// });

// addUser({
//     id: 97,
//     username: 'pedro',
//     room: 'audio'
// });



module.exports =  {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
