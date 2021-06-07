import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, ReplaySubject } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  // Replaysubject for users
  private readonly _users = new ReplaySubject<User[]>(1)
  users$ = this._users.asObservable()
  private set users(val: User[]) {
    this._users.next(val)
  }
  updateUsers(val: User[]): void {
    this.users = val
  }

  // Replaysubject for currentuser
  private readonly _currentUser = new ReplaySubject<User>(1)
  currentUser$ = this._currentUser.asObservable()
  private set currentUser(val: User) {
    this._currentUser.next(val)
  }
  updateCurrentUser(val: User): void {
    this.currentUser = val
  }
}
