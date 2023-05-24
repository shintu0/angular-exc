import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:any;

  constructor(private http:HttpClient) {

   }

   getUsers(){
    return this.http.get('https://next-ts-todo.vercel.app/api/users');

   }
}
