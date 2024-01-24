import { Socket } from "socket.io";

interface User {
    id: string
    name: string
    socket: Socket
}

export class UserManager {
    private users: User[];
    constructor() {
        this.users = [];
    }

    addUser(socketId){
        this.users = this.users.filter(x => x.socket.id === socketId);
    }
}