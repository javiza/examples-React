//modelo para registerformik
//ademas conectado con roles.enum.js

import { ROLES } from "./roles.enum";

export class User {
    user = '';
    email = '';
    password = '';
    role = ROLES.USER

    constructor(username, email, password, role){
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}