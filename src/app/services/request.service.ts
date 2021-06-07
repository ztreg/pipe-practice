import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { ObservablesService } from './observables.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  usersURL = 'https://jsonplaceholder.typicode.com/users'
  
  constructor(private http: HttpClient, private observables: ObservablesService) { }
  
  async getUsers(): Promise<void> {
    const res: User[] = await this.http.get<User[]>(this.usersURL).toPromise()
    this.observables.updateUsers(res)
  } 
}
