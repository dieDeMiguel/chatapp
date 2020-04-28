const { getUsersInRoom } = require('./users');

const rooms = [];

const addNewRoom = (newRoom) => {
   
    newRoom = newRoom.trim().toLowerCase();

    const isRoomExisting = rooms.find((room) => room === newRoom);

    //Check if the newRoom exists
    if(isRoomExisting) {
        return newRoom
    }

    rooms.push(newRoom);
    return newRoom;
};

const removeRoom = (roomName) => {
    //Fetch all users in the room
    const usersInRoom = getUsersInRoom(roomName);
   
    //if statement to check how many users are in the room, if there is no other user in the room it should be deleted
    if(usersInRoom.length === 0) {
        //Finding the index position of the room in the room array and the removing it from the rooms array
        const index = rooms.findIndex((room) => room === roomName);
        const removedRoom = rooms.splice(index, 1);

        return removedRoom;
    }
}

const getAllRooms = () => rooms;

module.exports = {
    addNewRoom,
    removeRoom,
    getAllRooms
}