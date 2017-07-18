//insert list of rooms in dijkstra format
var roomList = {}

//insert dijkstra map to change
var fullMap = {}

function updateMap() {
  for (fullmapvert in fullMap) {
    for (roomlistvert in roomList) {
      if (fullmapvert == roomlistvert) {
        while (roomList[roomlistvert].rooms.length) {
          fullMap[fullmapvert].rooms.push(roomList[roomlistvert].rooms.shift());
        }
        delete roomList[roomlistvert];
      }
    }
  }
  console.log(JSON.stringify(fullMap));
}
//  console.log(JSON.stringify(roomList));
function deleteRooms() {
  for (fullmapvert in fullMap) {
    fullMap[fullmapvert].rooms = [];
  }
  console.log(JSON.stringify(fullMap));
}
