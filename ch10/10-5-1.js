// 특이케이스를 다형성 이용해서 처리하기

class Hotel {
    constructor() {
        this.rooms = [];
    }

    addRoom(roomNumber) {
        this.rooms[roomNumber] = new Room(roomNumber);
    }

    // emptyRoom(roomNumber) {
    //     this.rooms[roomNumber] = null;  // 요래 하면 안됨, 밑에 clean() 함수 쓸대 에러생성
    // }

    // 아래와 같이 해줘야 다형성 활용
    emptyRoom(roomNumber) {
        this.rooms[roomNumber] = new EmptyRoom(roomNumber);
    }

    cleanRooms() {
        this.rooms.forEach((room) => room.clean());
    }
}

class Room {
    constructor(roomNumber) {
        this.roomNumber = roomNumber;
    }

    clean() {
        console.log('clean this room');
    }
}

//비어있는 방이라는 특이케이스를 만듬
// 다형성 이용할수 있고, 추가로직 더할 수 있어서 유지보수에 좋음
class EmptyRoom extends Room {
    clean() {
        console.log('empty room');
    }
}